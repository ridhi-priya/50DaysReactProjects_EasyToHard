import { useState } from "react";

function BusinessInformation() {
  // const [brandName, setBrandName] = useState("");
  // const [streetAddress, setStreetAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [taxIdNumber, setTaxIdNumber] = useState("");
  const [isNonAdultBeverageWaiverSigned, setIsNonAdultBeverageWaiverSigned] =
    useState(false);
  const [isAgreementSigned, setIsAgreementSigned] = useState(false);
  // const [coPdfUpload, setCoPdfUpload] = useState(null);

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
      <p>Please, enter information about your company.</p>

     

      <div className="grid grid-cols-2 gap-4">
        <div className="text-left">
          <label className="text-sm block" htmlFor="brandType">
            Brand Name*
          </label>
          <input
            type="text"
            id="brandType"
            placeholder="Input your Brand Name"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="text-left">
          <label className="text-sm block" htmlFor="brandType">
            Brand Type*
          </label>
          <input
            type="text"
            id="brandType"
            placeholder="Input your Brand Type"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="text-left">
          <label className="text-sm block" htmlFor="streetAddress">
            Street Address*
          </label>
          <input
            type="text"
            id="brandType"
            placeholder="Input your Street Address"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="text-left">
          <label className="text-sm block" htmlFor="city">
            City*
          </label>
          <input
            type="text"
            id="City"
            placeholder="Input your City"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="text-left">
          <label className="text-sm block" htmlFor="zipCode">
            Zip Code*
          </label>
          <input
            type="text"
            id="streetAddress"
            placeholder="Input your Zip Code"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="text-left">
          <label className="text-sm block" htmlFor="taxIDNumber">
            Tax ID Number*
          </label>
          <input
            type="text"
            id="streetAddress"
            placeholder="Input your Tax ID Number"
            className="border p-2 rounded-md"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <h4>Documents</h4>
        <p>
          Once the following documents are signed, you will be ready to get
          started.
        </p>

        <div className="flex items-center mb-2">
          <label>
            <input
              type="checkbox"
              checked={isNonAdultBeverageWaiverSigned}
              onChange={handleNonAdultBeverageWaiverSignature}
            />
            Non-adult beverage Kroger market supplier waiver and release
          </label>
          <span className="ml-2">
            {isNonAdultBeverageWaiverSigned ? "✓" : "✗"}
          </span>
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
          <span className="ml-2">{isAgreementSigned ? "✓" : "✗"}</span>
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
