
import React, {Component} from 'react';
import CharacterThumbnail from '../CharacterThumbnail/CharacterThumbnail.jsx';

import { Row, Col} from 'react-bootstrap';

import './CharacterList.css';

export default class CharacterList extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    var found = "";
    if(this.props.loaded == false) {
      found = "Loading ...";
    } else if (this.props.data.length === 0) {
      found = "Nothing found, please search something else";
    }
    return (
      <div>
        <Row>
          <Col md={8} mdOffset={2}>
            <div> {
              this.props.data.map(function (character) {
                return <CharacterThumbnail key={character._id} name={character.name} imageUrl={character.imageLink}/>;
              })
            }
            </div>
            <div className="center">
              <h3>{ found }</h3>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
CharacterList.propTypes = { data: React.PropTypes.array.isRequired};
CharacterList.propTypes = { loaded: React.PropTypes.bool.isRequired};