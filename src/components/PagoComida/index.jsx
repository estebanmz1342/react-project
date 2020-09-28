import React from 'react';
import Header from "../Header/Header";
import { Comida } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";




const PagoComida = () => {
    
    const [value, setValue] = React.useState(3  );

    return (
        <>
            <div className={Style.contenedor}>
                <Comida
                    src="https://instagram.fbog8-1.fna.fbcdn.net/v/t51.2885-15/e35/119379262_606890546648760_8852724859130531005_n.jpg?_nc_ht=instagram.fbog8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=LozFolqDnKoAX9YUZ3U&_nc_tp=18&oh=38124fdec90a2b4f4bb6abf8f194d612&oe=5F99B049"
                    alt="Hamburguesa Zeta" name="Hamburgueseria Zeta"
                    description="Hamburguesa Z tradicional" cantidad="Cantidad: 1" price="15k" />
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @HamburgueseriaZeta")}>PEDIR</button>
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
export default PagoComida;