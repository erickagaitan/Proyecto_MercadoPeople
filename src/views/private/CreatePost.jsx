const CreatePost = () => {
    return (
        <div className="container mt-5 w-50 mb-5">
            <h3 className="p-2">Crear publicación</h3>
            <div className="card p-4">
                <div class="form-check m-0 p-0">
                    <label>
                        Datos de prenda:
                    </label>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="">Marca</label>
                        <input type="text" className="form form-control" placeholder="Ingrese Marca" />
                    </div>
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="">Categoria de prenda</label>
                        <select className="form form-select">
                            <option value="">Mujer</option>
                            <option value="">Hombre</option>
                            <option value="">Niño</option>
                            <option value="">Niña</option>
                        </select>
                    </div>
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="">Nombre</label>
                        <select className="form form-select">
                            <option value="">Masculino</option>
                            <option value="">Feminino</option>
                        </select>
                    </div>
                    <div className="col-lg-8 mt-2">
                        <label htmlFor="">Descripción (opcional)</label>
                        <textarea className="form form-control" rows="3" cols="3" placeholder="Maximo 200 caracteres..."></textarea>
                    </div>
                </div>
            </div>
            <div className="card p-4 mt-2">
                <div class="form-check m-0 p-0">
                    <label >
                        Precio y Estado:
                    </label>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="">Precio:</label>
                            <input type="text" className="form form-control" placeholder="Ingrese Precio" />
                        </div>
                        <div className="col-lg-8 mt-2">
                            <label htmlFor="">Precio Oferta:</label>
                            <input type="text" className="form form-control" placeholder="Ingrese Precio" />
                        </div>
                        <div className="col-lg-8 mt-3">
                            <label>Estado:</label>
                            <div class="form-check form-check-inline mx-4">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Nuevo</label>
                            </div>
                            <div class="form-check form-check-inline mx-4">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Usado</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-4 mt-2">
                <div class="form-check m-0 p-0">
                    <label>
                        Imagenes:
                    </label>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mt-3">
                            <input className="form form-control"
                                type="file"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost