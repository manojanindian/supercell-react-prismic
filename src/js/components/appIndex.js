import React, { Component } from 'react';
import packageJSON from '../../../package.json';
import { SuperCellIcon, HappyFaceIcon } from './icons';
import StatelessComponent from './statelessComponentExample';
import { Link } from 'react-router';
import Prismic from 'prismic.io';
import PrismicConfig from '../prismic-config';



class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {blogList:[]};
    this.getDocListFromPrismic();
  }

  getDocListFromPrismic(){
    var _this = this;
    Prismic.Api(PrismicConfig.apiEndpoint, function(err, api){
      var options = {
        'fetch' : ["poc.poc-name"],
        'orderings' :'[poc.date desc]'
      };
      api.query('[[:d = at(document.type, "poc")]]', options, function(err, response){
        _this.setState({blogList:response.results});
      });
    });
  }

  render() {   

    var docs = [];
    
    const version = packageJSON.version;
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

    var blogList = this.state.blogList.map(function(object, i){
        return <div key={i} className="row">
              <div className='card' style={style.card}>
              <h1>{object.getText('poc.poc-name')}</h1>
              <Link to={'/blog/'+object.id}>read more..</Link>
            </div>
          </div>;
      });    

    return (
    <section className='container'>

      <div className="row">
        <div className='card' style={style.card}>          
          <Link to={'/'}><h1 className='logo'>SuperCell <SuperCellIcon /> version {version}</h1></Link>
        </div>
      </div>
      
      {blogList}
    </section>
    );
  }
}

export default AppIndex;
