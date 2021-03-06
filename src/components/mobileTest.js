import React, {Component} from 'react';


class Mobile extends Component {
  render() {
    return (
    <div style={styles.wrapper}>

    <div style={styles.main}>

      <div style={styles.info}>


      <a href="https://www.linkedin.com/in/cliff-pham-63467473" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/linkedin.png')}
      style={styles.icons}
      alt="linkedin"
      />
      </a>

      <a href="https://github.com/cliffpham" target="_blank" rel="noopener noreferrer">
      <img 
      src={require('../images/github.png')}
      style={styles.icons}
      alt="github"
      />
      </a>
    
      <a href="mailto:cliffpham@gmail.com">
      <img 
      src={require('../images/email.png')}
      style={styles.icons}
      alt="email"
      />
      </a>
 
      </div>



    </div>
 
    </div>
    
    )
  }
}

export default Mobile

const styles = {
  wrapper: {
    height: '100%', 
    width: '100%'
  },
  main: {
    margin: 'auto', 
    display: 'flex', 
    flexDirection: "row", 
    height: '100%'

  },
  info: {
    backgroundColor: '#FF4E20', 
    width: "20%", 
    flexDirection:"column"

  },
  header: {
    color: 'white', 
    fontFamily: 'Overpass Mono, monospace',
    fontSize: 30, 
    letterSpacing:'-3px', 
    textAlign: 'right', 
    padding: 10,
    margin: 0

  },
  icons: {
    width:"70%", 
    height: "$70%", 
    marginTop: "50%", 
    marginLeft: "1%",
    marginRight: "1%"
  },

}