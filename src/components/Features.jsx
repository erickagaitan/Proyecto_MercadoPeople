const Features = ({ features })=> {
    return(
        <div className="features">
            <p><strong>Características</strong></p>
            <ul>
                {
                    features.map((features,i)=> {
                        return(
                            <li key={i}>{ features }</li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

export default Features