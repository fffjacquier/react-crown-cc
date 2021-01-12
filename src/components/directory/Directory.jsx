import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from '../menu-item/MenuItem';

const DirectoryMenuStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <DirectoryMenuStyles>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem
            key={id}
            {...otherSectionProps}
          />
        ))}
      </DirectoryMenuStyles>
    );
  }
}

export default Directory;
