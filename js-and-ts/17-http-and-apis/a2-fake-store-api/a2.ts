import axios from 'axios';

interface StoreProduct {
	id?: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image?: string;
	rating?: { rate: number; count: number };
}

const getFakeStoreProducts = async (): Promise<string[]> => {
	try {
		const res = await axios.get<StoreProduct[]>(`https://fakestoreapi.com/products`);
		console.log(`Response status - ${res.status}`);
		// console.log(res.data);
		return res.data.map((product) => product.title);
	} catch (error) {
		console.error(`Error featching post: ${error}`);
		throw error;
	}
};

try {
	const productNames = await getFakeStoreProducts();
	console.log(productNames.join(',\n'));
} catch (error) {
	console.error(`Error fetching store products : ${error}`);
	throw error;
}
/*
Response status - 200
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops,
Mens Casual Premium Slim Fit T-Shirts ,
Mens Cotton Jacket,
Mens Casual Slim Fit,
John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet,
Solid Gold Petite Micropave ,
White Gold Plated Princess,
Pierced Owl Rose Gold Plated Stainless Steel Double,
WD 2TB Elements Portable External Hard Drive - USB 3.0 ,
SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s,
Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5,
WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive,
Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin,
Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ,
BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats,
Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket,
Rain Jacket Women Windbreaker Striped Climbing Raincoats,
MBJ Women's Solid Short Sleeve Boat Neck V ,
Opna Women's Short Sleeve Moisture,
DANVOUY Womens T Shirt Casual Cotton Short
*/

const addFakeStoreProduct = async (product: Omit<StoreProduct, 'id'>): Promise<void> => {
	try {
		const res = await axios.post<{ id: number }>(`https://fakestoreapi.com/products`, {
			product,
		});
		console.log(`Response status - ${res.status}`);
		console.log(res.data);
	} catch (error) {
		console.error(`Error creating new product: ${error}`);
		throw error;
	}
};

try {
	const newProduct = {
		title: 'LEGO Icons 10358 Transformers: Soundwave',
		price: 145.99,
		description: `LEGO Icons 10358 Transformers: Soundwave
Uutuus, lokakuu 2025!
Transformers-keräilymallin rakennussarja
Koriste kotiin tai työpaikalle
1505 osaa
Ikäsuositus: 18+`,
		category: 'Toys',
	};
	await addFakeStoreProduct(newProduct);
} catch (error) {
	console.error(error);
}
/*
Response status - 201
{ id: 21 }
 */

const deleteFakeStoreProduct = async (productId: number): Promise<void> => {
	try {
		const res = await axios.delete<StoreProduct>(`https://fakestoreapi.com/products/${productId}`);
		console.log(`Response status - ${res.status}`);
		console.log(`The product "${res.data.title}" was deleted`);
	} catch (error) {
		console.error(`Error deleting product: ${error}`);
		throw error;
	}
};

try {
	await deleteFakeStoreProduct(1);
} catch (error) {
	console.error(error);
}

/*
Response status - 200
The product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" was deleted
  */
