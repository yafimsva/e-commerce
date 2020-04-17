import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	AddButton,
	BackgroundImage,
	NameContainer,
	PriceContainer,
} from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	console.log('1231231231');

	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
