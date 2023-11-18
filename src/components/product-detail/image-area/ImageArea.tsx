import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const itemData = [
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684410/images/res_3f88af07401bd01fbb0af9a56adf3845.jpg',
		title: 'Breakfast',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684410/images/res_42cb5bb3bc9b0e55d0f5cfcd9c5b3a43.jpg',
		title: 'Burger',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684441/images/res_f29864cd81416688e7884cbec5e6ef10.jpg',
		title: 'Camera',
	},
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684441/images/res_86343bda744d555496a6c83493a88473.jpg',
		title: 'Camera',
	},
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684414/images/res_974dc0e4b6a1180b612c24afef8eb494.jpg',
		title: 'Camera',
	},
	{
		img: 'https://s13emagst.akamaized.net/products/40685/40684411/images/res_87712636cdfe742122fa92fa3d61d521.jpg',
		title: 'Camera',
	},
];

const ImageArea = () => {
	return (
		<ImageList sx={{ width: 600, height: 450 }} variant="quilted" cols={4} rowHeight={145}>
			{itemData.map(item => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
					<img {...srcset(item.img, 145, item.rows, item.cols)} alt={item.title} loading="lazy" />
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default ImageArea;

