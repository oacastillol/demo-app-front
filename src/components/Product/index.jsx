import { Grid, Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";



const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        minWidth: '100%',
    },
    root:{
        marginTop: theme.spacing(3),
    },
  }));


const manufactures = [
    {value:'A', name: 'American Home Food Products'},
    {value:'G', name: 'General Mills'},
    {value:'K', name: 'Kelloggs'},
    {value:'N', name: 'Nabisco'},
    {value:'P', name: 'Post'},
    {value:'Q', name: 'Quaker Oats'},
    {value:'R', name: 'Ralston Purina'},
]

const Product = (props)=>{
    const classes = useStyles();
    const [name,setName] = useState('');
    const [mfr,setMfr] = useState('');
    const [type,setType] = useState('');
    const [rating,setRating] = useState('');
    const [calories,setCalories] = useState('');
    const [protein,setProtein] = useState('');
    const [fat,setFat] = useState('');
    const [sodium,setSodium] = useState('');
    const [fiber,setFiber] = useState('');
    const [carbo,setCarbo] = useState('');
    const [sugars,setSugars] = useState('');
    const [potass,setPotass] = useState('');
    const [vitamins,setVitamins] = useState('');
    const [shelf,setShelf] = useState('');
    const [weight,setWeight] = useState('');
    const [cups,setCups] = useState('');

    const setProduct = ()=>{
        if(props.product){
            setName(props.product.name);
            setMfr(props.product.mfr);
            setType(props.product.type);
            setRating(props.product.rating);
            setCalories(props.product.calories);
            setProtein(props.product.protein);
            setFat(props.product.fat);
            setSodium(props.product.sodium);
            setFiber(props.product.fiber);
            setCarbo(props.product.carbo);
            setSugars(props.product.sugars);
            setPotass(props.product.potass);
            setVitamins(props.product.vitamins);
            setShelf(props.product.shelf);
            setWeight(props.product.weight);
            setCups(props.product.cups);
        }
    }
    useEffect(()=>{
        setProduct();
    },[]);
    const handleClick = (e)=>{
        e.preventDefault();
        props.onSubmit({
                        name,
                        mfr,
                        type,
                        rating,
                        calories,
                        protein,
                        fat,
                        sodium,
                        fiber,
                        carbo,
                        sugars,
                        potass,
                        vitamins,
                        shelf,
                        weight,
                        cups
                        });
    }

    const handleEdit = (e)=>{
        e.preventDefault();
        props.onSubmit();
    }
    return (
      <Container className={classes.root}>
      <Grid container spacing={3} >
        {props.title && <Grid item xs={12}>
            <Typography variant="h2" align='center'>
            Create a new Product.
            </Typography>
        </Grid>}
        <Grid item xs={12} >
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                id='name'
                value={name}
                onChange={((e) =>setName(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel fullWidth id="manufacturer-label">Manufacturer</InputLabel>
                <Select
                disabled={!props.editable}
                labelId="manufacturer-label"
                id="manufacturer"
                value={mfr}
                onChange={((e)=>setMfr(e.target.value))}
                label="Manufacturer"
                >
                    {manufactures.map((item)=>{
                        return <MenuItem value={item.value}>{item.name}</MenuItem>      
                    })}
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel fullWidth id="type-label">Type</InputLabel>
            <Select
            disabled={!props.editable}
            labelId="type-label"
            id="type"
            value={type}
            onChange={((e)=>setType(e.target.value))}
            label="Type"
            >
                <MenuItem value="C">
                    <em>Cold</em>
                </MenuItem>
                <MenuItem value="H">
                    <em>Hot</em>
                </MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Rating"
                name="rating"
                autoComplete="rating"
                autoFocus
                id='rating'
                value={rating}
                onChange={((e) =>setRating(e.target.value))}  
                />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Calories"
                name="calories"
                autoComplete="calories"
                autoFocus
                id='calories'
                value={calories}
                onChange={((e) =>setCalories(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Protein"
                name="protein"
                autoComplete="protein"
                autoFocus
                id='protein'
                value={protein}
                onChange={((e) =>setProtein(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Fat"
                name="fat"
                autoComplete="fat"
                autoFocus
                id='fat'
                value={fat}
                onChange={((e) =>setFat(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Fiber"
                name="fiber"
                autoComplete="fiber"
                autoFocus
                id='fiber'
                value={fiber}
                onChange={((e) =>setFiber(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Carbo"
                name="carbo"
                autoComplete="carbo"
                autoFocus
                id='carbo'
                value={carbo}
                onChange={((e) =>setCarbo(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Sugars"
                name="sugars"
                autoComplete="sugars"
                autoFocus
                id='sugars'
                value={sugars}
                onChange={((e) =>setSugars(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Potass"
                name="potass"
                autoComplete="potass"
                autoFocus
                id='potass'
                value={potass}
                onChange={((e) =>setPotass(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Vitamins"
                name="vitamins"
                autoComplete="vitamins"
                autoFocus
                id='vitamins'
                value={vitamins}
                onChange={((e) =>setVitamins(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Shelf"
                name="shelf"
                autoComplete="shelf"
                autoFocus
                id='shelf'
                value={shelf}
                onChange={((e) =>setShelf(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Weight"
                name="weight"
                autoComplete="weight"
                autoFocus
                id='weight'
                value={weight}
                onChange={((e) =>setWeight(e.target.value))}
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Cups"
                name="cups"
                autoComplete="cups"
                autoFocus
                id='cups'
                value={cups}
                onChange={((e) =>setCups(e.target.value))}  
                />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField 
                disabled={!props.editable}
                variant="outlined"
                margin="normal"
                type='number'
                required
                fullWidth
                label="Sodium"
                name="sodium"
                autoComplete="sodium"
                autoFocus
                id='sodium'
                value={sodium}
                onChange={((e) =>setSodium(e.target.value))}  
                />
        </Grid>
        {props.editable && <Grid item xs={12} >
            <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleClick}
            >
            Save
            </Button>
        </Grid>}
        {!props.editable && <Grid item xs={12} >
            <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleEdit}
            >
            Edit
            </Button>
        </Grid>}
      </Grid>
      </Container>
    )
}
Product.prototype = {
    editable: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    product: PropTypes.object
}

export default Product