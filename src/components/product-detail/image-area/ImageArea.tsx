import { ImageList, ImageListItem } from '@mui/material';
import React, { FC } from 'react';

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

interface Props {
	images: string[];
}

const ImageArea: FC<Props> = props => {
	const itemData = [
		{
			img: props.images?.[0],
			title: 'Image',
			rows: 2,
			cols: 2,
		},
		{
			img: props.images?.[1],
			title: 'Image',
			rows: 2,
			cols: 2,
		},
		{
			img: props.images?.[2],
			title: 'Image',
		},
		{
			img: props.images?.[3],
			title: 'Image',
		},
		{
			img: props.images?.[4],
			title: 'Image',
		},
		{
			img: props.images?.[5],
			title: 'Image',
		},
	];
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

