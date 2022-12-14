const Features = ({ features })=> {
    return(
        <div className="features">
            <p><strong>Características</strong></p>
            <ul>
                {
                    features.map((features)=> {
                        return(
                            <li key={features}>{ features }</li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

export default Features