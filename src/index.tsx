import React from 'react'
import ReactDOM from 'react-dom'
import { red } from 'color-name'
import { ReactComponent } from '*.svg'
import propTypes from 'prop-types'



let root: HTMLElement | null = document.getElementById('root')
// let ele  = React.createElement('h1', null, 'hello')
let title:string = 'Hello'
// console.log(ele)
let titleStyle: React.CSSProperties = { color: 'red', fontSize: 24}

function tick(){
    const ele: React.ReactElement = (
        <div>{new Date().toLocaleTimeString()}</div>
    )
    ReactDOM.render(ele, root)
}


// setInterval(tick, 1000)

interface Props {
    name: string
}
function Welcome(props: Props):React.ReactElement {
    return <h1>hello {props.name}</h1>

}

// ReactDOM.render(<Welcome name="abc"/>, root)



class Welcome2 extends React.Component<Props>{
    render(): React.ReactElement{
        return <h1>hello {this.props.name}</h1>
    }
}
// ReactDOM.render(<Welcome2 name="efg"/>, root)


interface PersonProps{  
    name?: string,
    gender?: 'male' | 'female'

}
class Person extends React.Component<PersonProps>{
    static defaultProps: PersonProps = {
        name: 'unname'
    }

    static propTypes ={
        name: propTypes.string.isRequired,
        gender: propTypes.oneOf(['male', 'female']).isRequired
    }
    render() {
        return <div>{this.props.name}</div>
    }

}

let personProps: PersonProps = {
    name: 'test'
}


ReactDOM.render(<Person {...personProps} />, root)

// ReactDOM.render(<h2 className="title" style={titleStyle}>{title}</h2>, root)

