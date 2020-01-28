import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
position: fixed;
margin-top: 1em;
margin-left: 2em;
display: inline-block;
`;

const DropdownContent = styled.div`
display: ${(props) => (props.show ? 'block' : 'none')};
position: absolute;
background-color: #f1f1f1;
width: 100%;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
`;


const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 0.5em 1em;
  font-size: 16px;
  //border: none;
  border: 2px solid;
  border-radius: 3px;
  margin-bottom: 0.5em;
  &:after{
    content: '';
    border: 4px solid transparent;
    border-top: 4px solid white;
    margin-left: 20px;
    margin-bottom: 3px;
    display: inline-block;
    vertical-align: bottom;
  }
`;

const DropdownOption = styled.a`
color: black;
padding: 12px 16px;
font-family: Arial;
text-decoration: none;
display: block;

&:hover{
  cursor: pointer;
  background-color: grey;
}
`;


const ShowAlgorithm = ({ defAlgoritmo, algoritmos, items }) => {
  const [selectedAlgoritmo, setSelectedAlgoritmo] = React.useState(defAlgoritmo);
  const [showDrop, setShowDrop] = React.useState(false);

  const optionSelected = (algoritmo) => {
    setSelectedAlgoritmo(algoritmo);
  };

  return (
    <div style={{ height: '100vh' }}>

      <Dropdown onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
        <DropdownButton>{selectedAlgoritmo.name}</DropdownButton>
        <DropdownContent show={showDrop}>
          {
            algoritmos.map((algoritmo) => (
              <DropdownOption
                key={algoritmo.value}
                value={algoritmo.value}
                onClick={() => optionSelected(algoritmo)}
              >
                {algoritmo.name}
              </DropdownOption>
            ))
          }
        </DropdownContent>
      </Dropdown>

      {
        algoritmos.map((algoritmo) => {
          if (algoritmo.value === selectedAlgoritmo.value) {
            return React.cloneElement(algoritmo.component, { items, key: algoritmo.value }, null);
          }
          return null;
        })
      }
    </div>
  );
};


ShowAlgorithm.propTypes = {
  defAlgoritmo: PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    component: PropTypes.element,
  }).isRequired,
  algoritmos: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    component: PropTypes.element,
  })).isRequired,
  items: PropTypes.number.isRequired,
};


export default ShowAlgorithm;


/*

     <Select value={selectedAlgoritmo} name="selectAlgoritmo" id="select" onChange={optionSelected}>
        {
          algoritmos.map((algoritmo) => (
            <Option
              key={`option-${algoritmo.value}`}
              value={algoritmo.value}
            >
              {algoritmo.name}
            </Option>
          ))
        }
      </Select>


*/
