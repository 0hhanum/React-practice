import React from "react";
import "./Detail.css";

// function Detail({ location: { state } }) {
//     console.log(state);
//     return <h1>Hello</h1>;
// };

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
            // redirect 시키기
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <div class="detail">
                <h1>{location.state.title}</h1>
                <span>{location.state.summary}</span>
            </div>
                ;
        } else {
            return null;
        }
    }
}
export default Detail;
