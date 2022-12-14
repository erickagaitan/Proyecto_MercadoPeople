import React, { useState, useContext } from 'react'
import Context from "../../context/context"
const defaultValue = () => {
    return {
        title: '',
        category: '',
        description: '',
        price: '',
        priceSale: '',
        status: '',
        img: '',
    };

};
const features = () => {
    return {
        color: '',
        material: '',
        madeIn: ''

    };

};

const CreatePost = () => {
    const { newItemCategories } = useContext(Context)
    const [formData, setFormData] = useState(defaultValue());
    const [formFeatures, setFormFeatures] = useState(features());

    const validate = (formData) => {
        formData.features = Object.values(formFeatures)
        newItemCategories(formData)

    }
    return (
        <div className="container mt-5 w-50 mb-5">
            <h3 className="p-2">Crear publicación</h3>
            <div className="card p-4">
                <div className="form-check m-0 p-0">
                    <label>
                        Datos de prenda:
                    </label>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="marca">Titulo</label>
                        <input id="marca" type="text" className="form form-control" placeholder="Ingrese Marca" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="categoria">Categoria de prenda</label>
                        <select defaultValue={""} id="categoria" className="form form-select" onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
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
                        <textarea id="descripcion" className="form form-control" rows="3" cols="3" placeholder="Maximo 200 caracteres..." onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
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
                            <input id="precio" type="text" className="form form-control" placeholder="Ingrese Precio" onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })} />
                        </div>
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="prefioOferta">Precio Oferta:</label>
                            <input id="prefioOferta" type="text" className="form form-control" placeholder="Ingrese Precio" onChange={(e) => setFormData({ ...formData, priceSale: e.target.value })} />
                        </div>
                        <div className="col-lg-8 mt-3">
                            <label>Estado:</label>
                            <div className="form-check form-check-inline mx-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="new" onChange={(e) => setFormData({ ...formData, status: e.target.value })} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Nuevo</label>
                            </div>
                            <div className="form-check form-check-inline mx-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="used" onChange={(e) => setFormData({ ...formData, status: e.target.value })} />
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
                            <input className="form form-control" placeholder='Color'
                                type="text"
                                onChange={(e) => setFormFeatures({ ...formFeatures, color: e.target.value })}
                            />
                        </div>
                        <div className="col-lg-3 mt-3 mx-2">
                            <label htmlFor="">Material:</label>
                            <input className="form form-control" placeholder='Material'
                                type="text"
                                onChange={(e) => setFormFeatures({ ...formFeatures, material: e.target.value })}
                            />
                        </div>
                        <div className="col-lg-3 mt-3 mx-2">
                            <label htmlFor="">Hecho en:</label>
                            <input className="form form-control" placeholder='Hecho en...'
                                type="text"
                                onChange={(e) => setFormFeatures({ ...formFeatures, madeIn: e.target.value })}
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
                            <input className="form form-control" placeholder='Url imagen'
                                type="text"
                                onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button
                    className="btn btn-primary mt-3 mb-5 w-25"
                    onClick={() => validate(formData)}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default CreatePost