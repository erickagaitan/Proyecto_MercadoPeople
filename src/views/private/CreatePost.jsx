import React, { useState, useContext } from 'react'
import Context from "../../context/context"

const CreatePost = () => {
    const { newItemCategories } = useContext(Context)
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        price: '',
        priceSale: '',
        status: '',
        img: '',
    });
    const [formFeatures, setFormFeatures] = useState({
        color: '',
        material: '',
        madeIn: ''
    });
  
    const sendData = async (event) => {
        event.preventDefault()
        formData.features = Object.values(formFeatures)
        newItemCategories(formData)
        event.target.reset();
    }
    const handleInputForm = (event) => {
        const { name, value } = event.target;
        if(name === 'price') parseInt(value)
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    const handleInputFeatures = (event) => {
        const { name, value } = event.target;
        setFormFeatures(formFeatures => ({ ...formFeatures, [name]: value }));
    }
    return (
        <div className="container mt-5 w-50 mb-5">
            <h3 className="p-2">Crear publicación</h3>
            <form className="row g-3" onSubmit={sendData}>
                <div className="card p-4">
                    <div className="form-check m-0 p-0">
                        <label>
                            Datos de prenda:
                        </label>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="titulo">Titulo</label>
                            <input name="title" type="text" className="form form-control" placeholder="Ingrese titulo" onChange={handleInputForm} required />
                        </div>
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="categoria">Categoria de prenda</label>
                            <select defaultValue={""} name="category" className="form form-select" onChange={handleInputForm} required>
                                <option value="" disabled >Seleccione</option>
                                <option value="woman">Mujer</option>
                                <option value="men">Hombre</option>
                                <option value="boy_and_girl">Niño</option>
                                <option value="boy_and_girl">Niña</option>
                                <option value="footwear">Zapateria</option>
                                <option value="accessories">Accesorios</option>
                            </select>
                        </div>
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="descripcion">Descripción (opcional)</label>
                            <textarea name="description" className="form form-control" rows="3" cols="3" placeholder="Maximo 200 caracteres..." onChange={handleInputForm} required></textarea>
                        </div> 
                    </div>
                </div>
                <div className="card p-4 mt-2">
                    <div className="form-check m-0 p-0">
                        <label >
                            Precio y Estado:
                        </label>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mt-2">
                                <label htmlFor="precio">Precio:</label>
                                <input name="price" type="text" className="form form-control" placeholder="Ingrese Precio" onChange={handleInputForm} required/>
                            </div>
                            <div className="col-lg-8 mt-2">
                                <label htmlFor="prefioOferta">Precio Oferta:</label>
                                <input name="priceSale" type="text" className="form form-control" placeholder="Ingrese Precio" onChange={handleInputForm} required/>
                            </div>
                            <div className="col-lg-8 mt-3">
                                <label>Estado:</label>
                                <div className="form-check form-check-inline mx-4">
                                    <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="new" onChange={handleInputForm} required/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Nuevo</label>
                                </div>
                                <div className="form-check form-check-inline mx-4">
                                    <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="used" onChange={handleInputForm} required/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Usado</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card p-4 mt-2">
                    <div className="form-check m-0 p-0">
                        <label>
                            Caracteristicas:
                        </label>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-3 mt-3 mx-2">
                                <label htmlFor="">Color: </label>
                                <input className="form form-control" placeholder='Color' name="color" required
                                    type="text"
                                    onChange={handleInputFeatures}
                                />
                            </div>
                            <div className="col-lg-3 mt-3 mx-2">
                                <label htmlFor="">Material:</label>
                                <input className="form form-control" placeholder='Material' name="material" required
                                    type="text"
                                    onChange={handleInputFeatures}
                                />
                            </div>
                            <div className="col-lg-3 mt-3 mx-2">
                                <label htmlFor="">Hecho en:</label>
                                <input className="form form-control" placeholder='Hecho en...' name="madeIn" required
                                    type="text"
                                    onChange={handleInputFeatures}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card p-4 mt-2">
                    <div className="form-check m-0 p-0">
                        <label>
                            Imagen:
                        </label>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mt-3">
                                <input className="form form-control" placeholder='Url imagen' name="img" required
                                    type="text"
                                    onChange={handleInputForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button
                        className="btn btn-primary mt-3 mb-5 w-25"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost