import React, { Component } from "react";
import Container from "../../components/Container";
import "./resowner.css";
import API from "../../utils/API";

class ResOwner extends Component {
    state = {
        restName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        //categories: ["Chinese", "Mexican", "Korean", "American", "Steakhouse", "Italian", "Seafood", "Breakfast", "Pizza", "Burger", "Thai", "Japanese", "Vietnamese", "Sandwiches", "Sushi Bar"],
        categories:[]
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
		API.getCategories().then(response => {
			console.log(response.data)
			this.setState({
				categories:response.data
			  });
		});
		
	}

    render() {
        return (
            <Container>
                <div className="middle">

                    <h3 className="title">Restaurant Information</h3>

                    <div className="form">
                        <form>
                            <input
                                name="restName"
                                placeholder="Restaurant Name (required)"
                                value={this.state.restName}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="street"
                                name="street"
                                placeholder="Street Address (required)"
                                value={this.state.street}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="city"
                                name="city"
                                placeholder="City (required)"
                                value={this.state.city}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="state"
                                name="state"
                                placeholder="State (required)"
                                value={this.state.state}
                                onChange={this.handleInputChange}
                            />

                            <input
                                id="zip"
                                name="zip"
                                placeholder="Zip (required)"
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                            />

                            <select id="addRestCategory">
                                <option value="0">Category (required)</option>
                                {this.state.categories.map(category => (
                                    <option key={category.id} value={category._id}>{category.categoryName}</option>
                                ))}
                            </select>
                        </form>

                        <button className="infoButton">Add Restaurant</button>
                    </div>
                </div>
            </Container>
        )
    }
};

export default ResOwner;