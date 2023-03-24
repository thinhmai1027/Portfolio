import "./intro.css"
import Me from "../../img/Me2.PNG"

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, My name is</h2>
          <h1 className="intro-name">Thinh Mai</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Python</div>
              <div className="intro-title-item">JavaScript</div>
              <div className="intro-title-item">HTML</div>
              <div className="intro-title-item">CSS</div>
              <div className="intro-title-item">React.js</div>
              <div className="intro-title-item">FastApi</div>
              <div className="intro-title-item">Django</div>
              <div className="intro-title-item">PostgreSQL</div>
              <div className="intro-title-item">Docker</div>
            </div>
          </div>
          <p className="intro-desc">
            I believe that technology has the power to make a real impact on the world and I am eager to be a part of that. Throughout my studies and any work experience, I have been able to develop my skills as a developer, but I am also eager to continue learning and growing in this field. I look forward to using my skills and passion to contribute to meaningful projects that will have a positive impact on society.
            </p>
            <div className='button-wrapper'>
              <a className="button-28" href="https://www.linkedin.com/in/thinh-mai/"role="button">LinkedIn</a>
              <a className="button-28" href="https://gitlab.com/thinhmai1027" role="button">GitLab</a>
              <a className="button-28" href="https://docs.google.com/document/d/1FmnI1xMuAfaNkABjO3VlCEOJ7Awu06bgRXFzlZcY8rU/edit?usp=sharing" role="button">Resume</a>
            </div>
        </div>
      </div>

      <div className="intro-right">
      <div className="intro-bottom-shadow"></div>
      <div className="intro-bottom"></div>
      <div className="intro-middle-shadow"></div>
      <div className="intro-middle"></div>
      <div className="intro-top-shadow"></div>
      <div className="intro-top">
        <div className="intro-r-wrapper">
        <div className="img">
          <img src={Me} alt="img" className='intro-img' />
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Intro