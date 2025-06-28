

function Picture() {

    const ImgUrl= '../src/assets/spidey.jpg';
    const HandleClick= (e) => {
      e.target.style.display="none";
    };
    

    return(<>
      <img onClick={(e)=>HandleClick(e)} src={ImgUrl} alt="image" />
    </>);

}

export default Picture