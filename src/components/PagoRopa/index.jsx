import React from 'react';
import Header from "../Header/Header";
import { Ropa } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";




const PagoRopa = () => {
    
    const [value, setValue] = React.useState(3  );

    return (
        <>
            <div className={Style.contenedor}>
                <Ropa

                    src="https://cdn.discordapp.com/attachments/547231002628456450/759200293211734026/unknown.png"
                    alt="Buso Negro" name="Oneline Brand"
                    description="Hoodie Negro-Rana" cantidad="Cantidad: 1" price="90k" />
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @Oneline_brand")}>PEDIR</button>
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
export default PagoRopa;