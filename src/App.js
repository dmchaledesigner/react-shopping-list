import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


const App = () => {

	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity

	const [items, setItems] = useState([
		{
			itemName: 'item 1',
			quantity: 3,
			isSelected: false,
		},

		{
			itemName: 'item 2',
			quantity: 1,
			isSelected: false,
		},

		{
			itemName: 'item 3',
			quantity: 4,
			isSelected: false,
		},

	]);



	const [inputValue, setInputValue] = useState('');
	const [count, setcount] = useState(0);


	const addItemHandler = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		}

		// can se the state here to merge the array with the new item or we can juat create a new array and pass that in
		// setItems(items =>
		// 	[...items, newItem]
		// )

		const newItems = [...items, newItem]; // this is the same instance as above
		setItems(newItems);


	}



	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='add-item-input'
						placeholder='Add an item...' />

					<FontAwesomeIcon
						onClick={addItemHandler}
						icon={faPlus} />
				</div>
				<div className='item-list'>
					{
						items.map((item, index) => (

							<div className='item-container' key={index}>
								<div className='item-name'>
									{item.isSelected ? ( // if is slected is true then show this block
										<>
											<FontAwesomeIcon icon={faCheckCircle} />
											<span className='completed'>{item.itemName}</span>
										</>
									) : ( // if not then show this block
										<>
											<FontAwesomeIcon icon={faCircle} />
											<span>{item.itemName}</span>
										</>
									)}

								</div>
								<div className='quantity'>
									<button>
										<FontAwesomeIcon icon={faChevronLeft} />
									</button>
									<span> 1 </span>
									<button>
										<FontAwesomeIcon icon={faChevronRight} />
									</button>
								</div>
							</div>

						))
					}
				</div>


				<div className='total'>Total: </div>
			</div>
		</div>
	);
};





export default App;
