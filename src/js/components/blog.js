import React, { Component } from 'react';
import { Link } from 'react-router';
import packageJSON from '../../../package.json';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import Prismic from 'prismic.io';
import PrismicConfig from '../prismic-config';


class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {blog:{}};
        this.getBlogDataFromPrismic();
    }

    getBlogDataFromPrismic(){
        console.log(PrismicConfig);
        var _this = this;
        Prismic.Api(PrismicConfig.apiEndpoint, function(err, api){
            api.query('[[:d = at(document.id, "' + _this.props.params.id + '")]]', {}, function(err, response){
                _this.setState({blog:response.results[0]});
            });
        });
    }

    render(){
        var title = '',
            description = '',
            image = '';

        const style = {
            card: {
                width: '100%',
                background: '#fff',
                borderRadius: '5px',
                WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                padding: '30px 40px 30px 40px',
                margin: '10px',
            },
        };

        if( this.state.blog.id !== undefined){
            title = this.state.blog.getText('poc.poc-name');
            description = this.state.blog.getStructuredText('poc.poc-description').asHtml();
            image = this.state.blog.getImage('poc.poc-image').url;
        }
        
        
        return (
            <section className='container'>
                <div className="row">
                    <div className='card' style={style.card}>          
                    <Link to={'/'}><h1 className='logo'>SuperCell <SuperCellIcon /> version {packageJSON.version}</h1></Link>
                    </div>
                </div>
                <div className="row">
                    <div className='card' style={style.card}>
                        <h1>{title}</h1>
                        <img src={image} alt={title}/>
                        <article dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog;