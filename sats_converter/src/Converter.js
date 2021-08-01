import { Card, Col, Row, Input } from 'antd';
import { convertSatstoUsd, convertUsdToSats } from './priceFunctions';

//turn input value into a varible, plug that variable into the converting functions, make it happen onType


const Converter = () => (
	<div className="Converter">
		<Row gutter={16}>
			<Col span={12}>
				<Card className="Card" title="Sats to USD" hoverable={true} size='large'>
					<Input 
					className="CardInput" 
					placeholder="Satoshis" 
					suffix="Sats" 
					/>
					<br></br>
					<br></br>
					<Input 
					className="CardInput" 
					placeholder="US Dollars" 
					value={convertSatstoUsd} 
					suffix="USD" 
					readOnly
					/>
				</Card>
			</Col>

			{/*USD to Sats*/}
			<Col span={12}>
				<Card className="Card" title="USD to Sats" hoverable={true} size='large'>
					<Input className="CardInput" placeholder="US Dollars" suffix="USD" />
					<br></br>
					<br></br>
					<Input className="CardInput" placeholder="Satoshis" value={convertUsdToSats} suffix="Sats" readOnly/> 
				</Card>
			</Col>
		</Row>
	</div>
  );
  
  export default Converter;