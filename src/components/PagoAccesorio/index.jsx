import React from 'react';
import Header from "../Header/Header";
import { Comida } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";
import Login from "../../container/Login/Login";




const PagoAccesorio = () => {
    
    const [value, setValue] = React.useState(3  );

    return (
        <>
            <div className={Style.contenedor}>
                <Comida
                    src="https://media.discordapp.net/attachments/691988704352272454/759583646909988884/120046530_183202300012695_3057444184010115438_n.png?width=499&height=499"
                    alt="Pulsera pareja" name="Pulseras Golden"
                    description="Pulseras Pareja Oro" cantidad="Cantidad: 1" price="220k" />
                <a href={Login} target="_blank">
                    <button onClick={() => window.alert("holi")}>PEDIR</button>
                </a>
                <Box className={Style.box} component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Calificación</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    </Box>
            </div>




        </>

    )
}
export default PagoAccesorio;