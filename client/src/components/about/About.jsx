export default function About() {
    return(
        <div className="about_section layout_padding">
        <div className="container">
           <div className="row">
              <div className="col-md-6">
                 <div className="about_taital_main">
                    <div className="about_taital">About Us</div>
                    <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                    <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                    <div className="read_bt"><a href="/recipes">Our recipes</a></div>
                 </div>
              </div>
              <div className="col-md-6">
                 <div className="about_img"><img src="/images/about.jpg"/></div>
              </div>
           </div>
        </div>
     </div>
    )
}