import { useState } from 'react';

function BusinessInformation() {
  const [brandName, setBrandName] = useState('');
  const [brandType, setBrandType] = useState('Local');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [taxIdNumber, setTaxIdNumber] = useState('');
  const [isNonAdultBeverageWaiverSigned, setIsNonAdultBeverageWaiverSigned] = useState(false);
  const [isAgreementSigned, setIsAgreementSigned] = useState(false);
  const [coPdfUpload, setCoPdfUpload] = useState(null);

  const handleNonAdultBeverageWaiverSignature = () => {
    setIsNonAdultBeverageWaiverSigned(!isNonAdultBeverageWaiverSigned);
  };

  const handleAgreementSignature = () => {
    setIsAgreementSigned(!isAgreementSigned);
  };

  const handleCoPdfUpload = (event) => {
    setCoPdfUpload(event.target.files[0]);
  };

  return (
    <div>
      <h2>Business Information</h2>
      <p>Please, enter information about your company.</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="brandName">Brand Name*</label>
          <input
            type="text"
            id="brandName"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="brandType">Brand Type*</label>
          <select
            id="brandType"
            value={brandType}
            onChange={(e) => setBrandType(e.target.value)}
            required
          >
            <option value="Local">Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less</option>
            <option value="National">National: Brands with distribution in 4 or more divisions or in more than 150 stores</option>
          </select>
        </div>

        <div>
          <label htmlFor="streetAddress">Street Address*</label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City*</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code*</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="taxIdNumber">Tax ID Number*</label>
          <input
            type="text"
            id="taxIdNumber"
            value={taxIdNumber}
            onChange={(e) => setTaxIdNumber(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <h4>Documents</h4>
        <p>Once the following documents are signed, you will be ready to get started.</p>

        <div className="flex items-center mb-2">
          <label>
            <input
              type="checkbox"
              checked={isNonAdultBeverageWaiverSigned}
              onChange={handleNonAdultBeverageWaiverSignature}
            />
            Non-adult beverage Kroger market supplier waiver and release
          </label>
          <span className="ml-2">{isNonAdultBeverageWaiverSigned ? '✓' : '✗'}</span>
        </div>

        <div className="flex items-center mb-2">
          <label>
            <input
              type="checkbox"
              checked={isAgreementSigned}
              onChange={handleAgreementSignature}
            />
            Electronically sign the agreement(s)
          </label>
          <span className="ml-2">{isAgreementSigned ? '✓' : '✗'}</span>
        </div>

        <div className="flex items-center mt-4">
          <label htmlFor="coPdfUpload">CO-PDF Upload</label>
          <input type="file" id="coPdfUpload" onChange={handleCoPdfUpload} />
        </div>
      </div>

      {/* ... Previous Step and Next Step buttons ... */}
    </div>
  );
}

export default BusinessInformation;