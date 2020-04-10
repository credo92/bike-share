import styled from 'styled-components';

const Btn = styled.button`
cursor:pointer;
width:100%;
height:60px;
margin-bottom:40px;
border:none;
background-color:${props=> props.selected ? '#F26522' : 'transparent'};

&:hover{
    background-color:${props=> props.selected ? '' : '#678678'};
}
`

export default Btn;

/*background-color:${props=> props.selected ? '#F26522' : 'transparent'};
&:hover{
    background-color:${props=> props.selected ? '' : '#678678'};
}

&:active{
    background-color:${props=> props.selected ? '' : '#678678'};
}*/