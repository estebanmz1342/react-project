import React from 'react';
import Header from "../Header/Header";
import { Ropa } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";




const PagoDetalle = () => {
    
    const [value, setValue] = React.useState(3  );

    return (
        <>
            <div className={Style.contenedor}>
                <Ropa

                    src="https://cdn.discordapp.com/attachments/691988704352272454/759580237067190272/119048952_796729091121919_1641449694697305807_n.png"
                    alt="Detalle 3" name="LMSA Designer"
                    description="Vidrio personalizado" cantidad="Cantidad: 1" price="55k" />
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @LMSA_designer")}>PEDIR</button>
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
export default PagoDetalle;