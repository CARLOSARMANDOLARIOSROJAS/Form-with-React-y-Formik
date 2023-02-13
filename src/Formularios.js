
import { Formik, Form } from "formik";
import React, {useState} from "react";


// const publicar = (values) => {
//     console.log(values);
// } 
const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <div className="container">
            <Formik
                // Lo que sigue es un objeto:
                initialValues={{
                    nombre: '',
                    correo: ''
                }}
                validate={(values) => {
                    let errores = {};
                    //validacion para el nombre
                    if (!values.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre';
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                        errores.nombre = 'El nombre solo puede contener letras y espacios. Dumbass'
                    }

                    //Validacion para el correo 

                    if (!values.correo) {
                        errores.correo = 'Por favor ingresa un correo.';
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
                        errores.correo = 'Solo se aceptan letras, numeros, puntos, guión y guión bajo. Dumbass'
                    }
                    return errores;
                   
                }}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    cambiarFormularioEnviado(true);
                    setTimeout( () => cambiarFormularioEnviado(false), 5000); 
                    // alert(JSON.stringify(values));
                    // console.log(values);
                    // console.log('Formulario Enviado')
                }}
            >
                {({ values,errors, touched ,handleSubmit, handleChange, handleBlur }) => (
                    <Form action="" className="formulario"  >
                        {/* onSubmit={handleSubmit}  esta parte iría arriba si usamos form y no Form.*/}
                        {/* Agregamos un fragmento vacío de React */}
                       
                        <div className="primerinput ">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                placeholder="Ingresa tu nombre..."
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            
                            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                        </div>
                        <div className="segundoinput">
                            <label htmlFor="nombre">Correo</label>
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                required
                                placeholder="Ingresa tu correo..."
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                        <button className="btn" type="submit">Enviar formulario.</button>
                        { formularioEnviado && <p className="exito">Formulario enviado con exito</p>}
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Formulario;