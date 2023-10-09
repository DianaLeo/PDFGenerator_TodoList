import * as React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Autocomplete, TextField, Box, ListItem, Popper, SxProps, Theme, Grid, Typography, debounce } from '@mui/material';
import { SyntheticEvent, useRef } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBnxWUArZubdjx7bZNr6dy2SKow7-03z0Y';

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}
const autocompleteService = { current: null };
interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
}
interface PlaceType {
  description: string;
  structured_formatting: StructuredFormatting;
}

export default function GooglePlacesSearch() {
  const [value, setValue] = React.useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce(
        (
          request: { input: string, region: string },
          callback: (results?: readonly PlaceType[]) => void,
        ) => {
          (autocompleteService.current as any).getPlacePredictions(//returns a Promise, but why no async/await
            request,
            callback,
          );
        },
        400,
      ),
    [],
  );

  React.useEffect(() => {
    let active = true;
    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (
        window as any
      ).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }
    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }
    fetch({ input: inputValue, region: 'au' }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = [];
        if (value) {
          newOptions = [value];
        }
        if (results) {
          newOptions = [...newOptions, ...results];
        }
        setOptions(newOptions);
      }
    });
    return () => {
      active = false;
    };
  }, [value, inputValue]);

  return (
      <Autocomplete
        id="google-map-demo"
        //freeSolo: the Autocomplete is free solo, meaning that the user input is not bound to provided options.
        //disableClearable
        disablePortal//the Popper content will be under the DOM hierarchy of the parent component
        sx={styles.autocomplete}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.structured_formatting.main_text
        }
        options={options}
        value={value}
        noOptionsText="No locations"
        // PopperComponent={(props) => (
        //   <Popper {...props} anchorEl={ancherElement.current}>
        //     {props.children}
        //   </Popper>
        // )}
        onChange={(event: SyntheticEvent<Element, Event>, newValue: PlaceType | null) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params}
            placeholder="where are you going"
            sx={styles.input}
            InputProps={{
              ...params.InputProps,
              endAdornment: (null),
              startAdornment: (<LocationOnOutlinedIcon sx={styles.icon} />)
            }}
          />
        )}
        renderOption={(props, option) => {
          console.log(option);
          return (
            <ListItem {...props} sx={styles.option}>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnOutlinedIcon sx={styles.icon} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }}>
                  {option.structured_formatting.main_text}
                </Typography>
                <Typography variant="body2" color="black">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </ListItem>
          );
        }}
      />

  );
}

const styles: Record<string, SxProps<Theme>> = {
  autocomplete: {
    '& + .MuiAutocomplete-popper': {
      marginTop: '40px',
      position: 'absolute',
      top: 40,
    },
    '& + .MuiAutocomplete-popper .MuiAutocomplete-option:hover': {
      // 👇 Customize the hover bg color here
      backgroundColor: 'rgb(151, 174, 209)',
    },
  },
  input: {
    '& .MuiAutocomplete-inputRoot': {
      position: 'relative',
      borderRadius: '16px',
      height: 76,
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 600,
      fontSize: 20,
      padding: '24px 0px 24px 16px',
      marginBottom: '40px',
      '& fieldset': {
        borderColor: 'white',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.25)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderWidth: 5,
        borderColor: 'rgb(151, 174, 209)',
        boxShadow: 'none',
      },
    },
    '& .MuiAutocomplete-input': {
      boxSizing: 'border-box',
    },
  },
  option: {
    minHeight: 71,
    borderBottom: '1px solid rgba(0,0,0,0.25)',
    padding: '12px 16px',
  },
  icon: {
    marginRight: '12px',
  },
}
