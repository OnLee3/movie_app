import React from "react";
import "../css/Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        const { location } = this.props;
        const { state } = location;
        if (state){
            return (
            <div className="detail__background" style={{backgroundImage: `url(${state.background})`}}>
                <div className="detail__grid">
                    <img className="detail__poster" src={state.poster} alt={state.title}/>
                    <div className="detail__description">
                        <h1 className="detail__title">{state.title}</h1>
                        <h5 className="detail__summary">{state.summary}</h5>
                    </div>
                </div>
            </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;