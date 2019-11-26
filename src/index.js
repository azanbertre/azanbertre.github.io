import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faSteamSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import 'styles.css';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'Home',
            lastItem: 'Home'
        }
    }

    componentDidMount() {
        document.getElementById('presentation').classList.add("preload");
        setTimeout(function(){
            document.getElementById('presentation').className="content open";
        }, 500);
    }

    changeMenu = (activeItem) => {
        this.setState({lastItem: this.state.activeItem});
        this.setState({
            activeItem
        });
    }

    render() {

        return (
            <main>
                <Content activeItem={this.state.activeItem} lastItem={this.state.lastItem} />
                <Menu activeItem={this.state.activeItem} onChange={this.changeMenu} />
            </main>
        );

    }

}

function Presentation(props) {

    var myItem = 'Home';

    return (
        <div id="presentation" className={((props.activeItem !== myItem) ? 'content' : 'content open')} style={(props.lastItem === myItem) ? {"zIndex": 0} : {"zIndex": -1}}>
            <div>
                <section>
                    <h2>Olá, <span>meu nome é</span></h2>
                    <h1>Pedro</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis alias, atque molestias ullam inventore illo quos repellat modi, tempore excepturi. Recusandae eum quas dolor ab molestias optio, sequi quo?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis alias, atque molestias ullam inventore illo quos repellat modi, tempore excepturi. Recusandae eum quas dolor ab molestias optio, sequi quo?
                    </p>
                </section>
            </div>
        </div>
    );

}

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItemPosition: 0,
            menuItems: [
              { text: 'Home' },
              { text: 'Habilidades' },
              { text: 'Projetos' },
              { text: 'Contato' },
            ],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(activeItem) {
        return e => {
            e.preventDefault();

            var id = 'Home';
            switch (activeItem) {
                case 'Home':
                    id = 'presentation';
                    break;
                case 'Habilidades':
                    id = 'skills';
                    break;
                case 'Projetos':
                    id = 'projects';
                    break;
                case 'Contato':
                    id = 'contact';
                    break;
            }

            var content = document.getElementById(id);
            var rect = content.getBoundingClientRect();

            var x = (content.clientWidth || content.innerWidth);
            var y = (content.clientHeight || content.innerHeight);

            var sX = rect.left;
            var sY = rect.top;

            var rX = e.clientX;
            var rY = e.clientY;

            var percentX = Math.floor((rX / x) * 100);
            var percentY = Math.floor((rY / y) * 100);

            content.style["transform-origin"] = `${percentX - 10}% ${percentY}%`;

            this.props.onChange(activeItem);
            this.setState({
                activeItemPosition: document.getElementById(activeItem).offsetTop
            });
        }
    }

    render() {

        const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)

        return(
            <nav id="content-middle">
                <a href="">
                    <img src={require("./content/Logo.png")} />
                </a>
                <div id="menu">
                    <span className="menu-active" style={{ top: this.state.activeItemPosition }}></span>
                    {menuItems}
                </div>
                <div id="social">
                    <a href=""><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a href=""><FontAwesomeIcon icon={faSteamSquare} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitch} /></a>
                    <a href=""><FontAwesomeIcon icon={faGithubSquare} /></a>
                </div>
            </nav>
        )

    }

}

function MenuItem(props) {
    return (
        <div
            id={ props.item.text }
            onClick={ props.handleClick(props.item.text) }
        >
        { props.item.text }
        </div>
    )
}

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="content-left" >
                <Presentation activeItem={this.props.activeItem} lastItem={this.props.lastItem} />
                <Projects activeItem={this.props.activeItem} lastItem={this.props.lastItem} />
                <Skills activeItem={this.props.activeItem} lastItem={this.props.lastItem} />
                <Contact activeItem={this.props.activeItem} lastItem={this.props.lastItem} />
            </div>
        );

    }

}

function Projects(props) {
    var myItem = "Projetos";    

    return (
        <div id="projects" className={(props.activeItem !== myItem) ? "content" : "content open"} style={(props.lastItem === myItem) ? {"zIndex": 0} : {"zIndex": -1}}>
            <div id="canvas"></div>
        </div>
    );
}
function Skills(props) {
    var myItem = "Habilidades";

    return (
        <div id="skills" className={(props.activeItem !== myItem) ? "content" : "content open"} style={(props.lastItem === myItem) ? {"zIndex": 0} : {"zIndex": -1}}>

        </div>
    );
}
function Contact(props) {
    var myItem = "Contato";

    return (
        <div id="contact" className={(props.activeItem !== myItem) ? "content" : "content open"} style={(props.lastItem === myItem) ? {"zIndex": 0} : {"zIndex": -1}}>

        </div>
    );
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
