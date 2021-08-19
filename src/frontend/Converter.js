import "./Converter.css";
import React from 'react';
import { Card, Col, Row, Input } from 'antd';
import { convertSatsToUsd, convertUsdToSats } from '../backend/priceFunctions';

//turn input value into a variable, plug that variable into the converting functions, make it happen onType

const Converter = () => {
	const [sats, setSats] = React.useState();
	const [usd, setUsd] = React.useState();

	const [sats1, setSats1] = React.useState();
	const [usd1, setUsd1] = React.useState();

	React.useEffect(() => {
		convertSatsToUsd(sats)
		.then((y) => {
			setUsd(y);
		});
	}, [sats])

	React.useEffect(() => {
		convertUsdToSats(usd1)
		.then((y) => {
			setSats1(y);
		});
	}, [usd1])

	return (
		<div className="Converter">
			<Row gutter={16}>
				<Col span={12}>
					<Card className="Card" title="Sats to Usd" hoverable={true} size='large'>
						<Input className="CardInput" placeholder="Satoshis" type="number" onChange={(e) => setSats(e.target.value)} suffix="Sats"/>
						<br></br>
						<br></br>
						<Input className="CardInput" placeholder="US Dollars" value={usd || 0} suffix="USD"/>
					</Card>
				</Col>

				{/*USD to Sats*/}
				<Col span={12}>
					<Card className="Card" title="Usd to Sats" hoverable={true} size='large'>
						<Input className="CardInput" placeholder="US Dollars" type="number" onChange={(e) => setUsd1(e.target.value)} suffix="USD"/>
						<br></br>
						<br></br>
						<Input className="CardInput" placeholder="Satoshis" value={sats1 || 0} suffix="Sats"/> 
					</Card>
					<br></br>
				</Col>
			</Row>
			<p className='Coingecko'><strong>Powered by CoinGecko 🦎</strong></p>
			<p className='Repo'><a href="https://github.com/thecallousedcoin/sats-converter">Github Repo</a></p>
		</div>
  	);
}
  
  export default Converter;