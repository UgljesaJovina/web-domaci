import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './elements';
import "./styles/mainStyle.css"
import { Home, Meal, MealList } from './pages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { soups } from './jsons/soups';
import { salads } from './jsons/salads';
import { mainCourses } from './jsons/mainCourses';

// chat gpt convo sa informacijama za sajt: https://chat.openai.com/share/315ef673-2bf2-4b18-94b4-5b965d129afd
library.add(faClock);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Navigate to="/home" />} /> 
					<Route path="/home" element={<Home />} />
					<Route path="/supe" element={<MealList cards={soups} />} />
					<Route path="/salate" element={<MealList cards={salads} />} />
					<Route path="/glavna-jela" element={<MealList cards={mainCourses} />} />
					<Route path="/jela/:id" element={<Meal />} />
				</Route>
				<Route path='*' element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
