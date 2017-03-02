import React, { Component } from 'react';
import { SuperCellIcon } from './icons';
import { Link } from 'react-router';

// jscs:disable maximumLineLength

class StyleGuide extends Component {
  render() {
    const style = {
      card: {
        width: '100%',
        background: '#ffffff',
        borderRadius: '5px',
        WebkitBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        padding: '30px 40px 30px 40px',
        margin: '10px',
        overflow: 'hidden',
      },
      center: {
        textAlign: 'center',
      },
      styleInfo: {
        fontSize: '0.83em',
        textAlign: 'center',
        paddingBottom: '20px',
      },
    };
    return (
    <section className='container'>

      <div className="row">
        <div className='card' style={style.card}>
          <h1>SuperCell <SuperCellIcon /> React Style Guide</h1>
        <p style={style.center}><Link to={'/'}><strong>Home</strong></Link></p>
      <p>This page is a basic style guide for your React based app. <strong>By default most styles are turned off.</strong> Styles can be turned on in the "src/scss/style.scss" file by uncommenting the sections you would like to add to your app. Only use the ones that you need to keep your files as small as possible.</p>
        <p>All CSS assumes a mobile-first approach. Media queries are handeled as mixins. See "src/scss/_base.scss" for example on how to use them.</p>
        </div>
      </div>

      <div className="row">
        <div className='card' style={style.card}>
          <h1>Header one</h1>
          <h2>Header two</h2>
          <h3>Header three</h3>
          <h4>Header four</h4>
          <h5>Header five</h5>
          <h6>Header six</h6>
          <hr />


          <h2>Body Copy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatum illum, ducimus tempore, id dignissimos molestias amet odit atque vero rem recusandae cumque a magnam velit in vitae, facere aperiam?</p>
          <p style={style.center}>Code example: <code>&lt;section&gt;</code></p>
          <p style={style.center}><code>&lt;pre&gt;</code> example:</p>
          <pre>&lt;p&gt;Put your code here&lt;/p&gt;</pre>
          <hr />


          <h2>Lists</h2>
          <p>Ordered List</p>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
          <hr />


          <h2>Table</h2>
          <div className="style-info" style={style.styleInfo}>
            Additional classes (add to <code>&lt;table&gt;</code>) <code>.table-striped</code><br />
            To make responsive wrap <code>&lt;table&gt;</code> in <code>&lt;div class="table-responsive"&gt;</code>
          </div>


          <div className="table-responsive">
            <table role="grid">
                <thead>
                  <tr>
                    <th>Table Header</th>
                    <th>Table Header</th>
                    <th>Table Header</th>
                    <th>Table Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, ad</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, ad</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, ad</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />


            <h2>Forms</h2>
            <form method="">

            <p><label htmlFor="text">Text</label><br />
            <input type="text" name="text1" /></p>

            <p><label htmlFor="password">Password</label><br />
            <input type="password" name="password1" /></p>

            <p><label htmlFor="date">Date</label><br />
            <input type="date" name="date1" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYY-MM-DD" title="YYY-MM-DD" /></p>

            <p><label htmlFor="color">Color</label><br />
            <input type="color" name="color1" defaultValue="#2B5087" /></p>

            <p><label htmlFor="email">Email (multible coma seperate)</label><br />
            <input type="email" name="email1" /></p>

            <p><label htmlFor="range">Range (1-100 is steps of 10)</label><br />
            <input type="range" name="range1" min="0" max="100" step="10" defaultValue="20" /></p>

            <p><label htmlFor="search">Search</label><br />
            <input type="search" name="date1" /></p>

            <p><label htmlFor="url">URL</label><br />
            <input type="url" name="url1" /></p>

            <p><label htmlFor="text-area">Text Area</label><br />
            <textarea name="textarea1" rows="8" cols="50"></textarea></p>

            <p><label htmlFor="numbers">Number (1-5)</label><br />
            <input type="number" name="number1" min="1" max="5" defaultValue="1" /></p>

            <p><label htmlFor="check-box">Check boxes:</label><br />
            <input type="checkbox" name="check1" defaultChecked /><span>checkone</span><br />
            <input type="checkbox" name="check2" /><span>checkone</span><br />
            <input type="checkbox" name="check3" /><span>checkone</span><br />
            </p>

            <p>
            <label htmlFor="radios">Radios</label><br />
            <input type="radio" name="radio1" defaultValue="one" defaultChecked="checked" /><label>check one</label><br />
            <input type="radio" name="radio1" defaultValue="two" /><label>check two</label><br />
            <input type="radio" name="radio1" defaultValue="three" /><label>check three</label><br />
            </p>

            <p>
            <label htmlFor="select-list">Select List</label><br />
            <select name="select1">
                <option defaultValue="" disabled>-- Select an option --</option>
                <optgroup label="Group 1">
                    <option defaultValue="option1">option1</option>
                    <option defaultValue="option2">option2</option>
                    <option defaultValue="option3">option3</option>
                </optgroup>
                <optgroup label="Group 2">
                    <option defaultValue="option1">option1</option>
                    <option defaultValue="option2">option2</option>
                    <option defaultValue="option3">option3</option>
                </optgroup>
            </select>
            </p>

            <p>
            <label htmlFor="select-list-multiple">Select List (multiple)</label><br />
            <select name="select1" size="8" multiple>
            {/*<!--  width="100" style="width: 100px" (not html5) -->*/}
                <optgroup label="Group 1">
                    <option defaultValue="option1">option1</option>
                    <option defaultValue="option2">option2</option>
                    <option defaultValue="option3">option3</option>
                </optgroup>
                <optgroup label="Group 2">
                    <option defaultValue="option1">option1</option>
                    <option defaultValue="option2">option2</option>
                    <option defaultValue="option3">option3</option>
                </optgroup>
            </select>
            </p>
            <input type="hidden" name="userid" defaultValue="12345" />
            {/*<!-- hidden fields use JS to alter values -->*/}
            <input type="hidden" name="statement" defaultValue="Cool Moves" />
            {/*<!-- hidden fields can use JS to alter values -->*/}
            </form>
   			<hr />


        <h2>Buttons</h2>
        <a className="button" href="#">Link</a>
        <button className="button" type="submit">Button</button>
  			<button disabled="disabled">Disabled Button</button>
        <input className="button" type="button" value="Input" />
        <input className="button" type="submit" value="Submit" />
        <input type="image" className="img-button" src="http://placehold.it/100x34" name="submit1" value="Image Button" />
        <p><a className="button expanded" href="#">.expanded</a></p>

  			<a className="button success" href="#">.success</a>
        <a className="button info" href="#">.info</a>
        <a className="button warning" href="#">.warning</a>
        <a className="button danger" href="#">.danger</a>

  			<p>Button Group</p>
        <ul className="button-group">
          <li><a href="#" className="button">Button 1</a></li>
          <li><a href="#" className="button">Button 2</a></li>
          <li><a href="#" className="button">Button 3</a></li>
  			</ul>
  	    <hr />


      <div className="panel">
          <h2>Panel</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi, vel illo nesciunt provident voluptate officia minima distinctio a laborum officiis corporis sapiente autem excepturi quod facere odit ea cumque!</p>
        </div>
        <div className="panel success">
          <h2>panel.success</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi, vel illo nesciunt provident voluptate officia minima distinctio a laborum officiis corporis sapiente autem excepturi quod facere odit ea cumque!</p>
        </div>
        <div className="panel info">
          <h2>panel.info</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi, vel illo nesciunt provident voluptate officia minima distinctio a laborum officiis corporis sapiente autem excepturi quod facere odit ea cumque!</p>
        </div>
        <div className="panel warning">
        <h2>panel.warning</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi, vel illo nesciunt provident voluptate officia minima distinctio a laborum officiis corporis sapiente autem excepturi quod facere odit ea cumque!</p>
        </div>
        <div className="panel danger">
          <h2>panel.danger</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi, vel illo nesciunt provident voluptate officia minima distinctio a laborum officiis corporis sapiente autem excepturi quod facere odit ea cumque!</p>
        </div>

        </div>
      </div>

    </section>
    );
  }
}

export default StyleGuide;
