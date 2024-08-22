import React, { useState } from 'react';
import './App.css'; // Add CSS for styling

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    tourPackage: 'Goa',
    arrivalDate: '',
    numberOfPersons: '',
    availOption: 'Boarding',
    couponCode: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className='form-photo'>
        <p className='main-label'>Travel Reservation Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='circle-div'>
          <div id='circle1'>*denotes mandatory</div>
          <div id='circle2' />
          <div id='circle3' />
        </div>
        <div className='form-div'>
          <div>
            <label>Full Name*:</label>
            <input type="text" name="fullName" value={formData.fullName} required />
          </div>
          <div>
            <label>Email Address*:</label>
            <input type="email" name="email" value={formData.email} required />
          </div>
          <div>
            <label>Select Tour Package*:</label>
            <select name="tourPackage" value={formData.tourPackage} required> 
              <option value="Goa">Goa</option>
              {/* Add other options as needed */}
            </select>
          </div>
          <div>
            <label>Arrival Date*:</label>
            <input type="date" name="arrivalDate" value={formData.arrivalDate} required />
          </div>
          <div>
            <label>Number of Persons*:</label>
            <input type="number" name="numberOfPersons" value={formData.numberOfPersons} required />
          </div>
          <div>
            <label>What would you want to avail?*</label>
            <div>
              <input type="checkbox" name="availOption" value="Boarding" checked={formData.availOption === 'Boarding'} /> Boarding
              <input type="checkbox" name="availOption" value="Fooding" checked={formData.availOption === 'Fooding'} /> Fooding
              <input type="checkbox" name="availOption" value="Sightseeing" checked={formData.availOption === 'Sightseeing'} /> Sightseeing
            </div>
          </div>
          <div>
            <label>Discount Coupon Code:</label>
            <input type="text" name="couponCode" value={formData.couponCode} />
          </div>
          <div>
            <label>Terms and Conditions*:</label>
            <input type="radio" name="terms" required /> I agree
            <input type="radio" name="terms" /> I disagree

          </div>
          <button type="submit">Complete Reservation</button>
        </div>

      </form>
    </div>
  );
};

export default App;

