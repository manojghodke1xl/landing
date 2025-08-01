import React, {useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PaymentForm = () => {
     const [coupon, setCoupon] = useState(true);
     const [couponCode, setCouponCode] = useState("");
     const [isFocused, setIsFocused] = useState(false);
     const handleFocus = () => {
       setIsFocused(true);
     };

     const handleBlur = () => {
       setIsFocused(false);
     };

     const isButtonDisabled = !couponCode;

     const containerStyle = {
       border: isFocused ? "1px solid #3f3f3f" : "",
       borderRadius: "12px",
       // padding: '5px',
       // marginBottom: '10px',
     };

     const [formData, setFormData] = useState({
       name: "",
       email: "",
       phone: "",
     });

     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
     };
  return (
    <div className=" text-black px-10 xl:px-32 py-6">
      <div className="relative bg-[#f5f7f9] w-full font-inter">
        <div className="relative w-full mt-16 mr-auto px-4 sm:px-0 mb-44 md:mb-0">
          <div className="mb-8">
            <h1 className="text-black font-semibold text-lg mb-2 font-poppins">
              Payment Details
            </h1>
            <p className="text-[#656565] text-sm">
              Complete your purchase by providing your payment details.
            </p>
          </div>
          <div>
            <div className="bg-white border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm p-3 mb-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[15px] text-[#3f3f3f] font-medium mb-1">
                  Billing Information
                </p>
              </div>
              <div className="stacked_form-fields bg-white w-full rounded-md">
                <div className="relative z-[2]">
                  <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mb-2 px-3 text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] ring-1 rounded-lg ring-blue-gray-100 focus:ring-1 focus:ring-[#3f3f3f] focus:border-[#3f3f3f]"
                  />
                </div>
                <div className="relative z-[1]">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mb-2 px-3 text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] ring-1 rounded-lg ring-blue-gray-100 focus:ring-1 focus:ring-[#3f3f3f] focus:border-[#3f3f3f]"
                  />
                </div>
                <div className="relative z-[2]" style={containerStyle}>
                  <PhoneInput
                    className="phone-border"
                    preferredCountries={["in"]}
                    placeholder="+91 12345-67890"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    buttonStyle={{
                      borderRight: "1px solid #818181",
                      borderRadius: "10px",
                      width: "52px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    dropdownStyle={{
                      top: "50px",
                      left: "0px",
                    }}
                    country={"in"}
                    inputStyle={{
                      borderRadius: "12px",
                      border: "1px solid #ccc",
                      marginLeft: "15px",
                      color: "black",
                      width: "96.2%",
                      height: "48px",
                      // padding: "0 8px",
                    }}
                    onChange={(value, country, e, formattedValue) => {
                      const phone = formattedValue.split(" ");
                      const newPhone = phone
                        .filter((ph, i) => i !== 0)
                        .join("")
                        .replace("-", "");
                      setFormData({
                        ...formData,
                        phone: newPhone,
                        phoneCode: country.dialCode,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            {coupon ? (
              <button
                onClick={() => setCoupon(!coupon)}
                className="flex bg-white justify-between relative items-center px-3 cursor-pointer w-full h-[44px] gap-x-2 border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm"
                title="Click here to apply coupon"
              >
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Group_5008"
                    data-name="Group 5008"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_1346"
                      data-name="Path 1346"
                      d="M12,20.022,8.473,21.729l-1.6-3.574-3.8-.959,1.068-3.769L1.846,10.249l3.241-2.2.285-3.907,3.9.4L12,1.729l2.73,2.81,3.9-.4.285,3.907,3.241,2.2-2.293,3.177,1.068,3.769-3.8.959-1.6,3.574Z"
                      fill="#4a4a59"
                      fill-rule="evenodd"
                      opacity="0.3"
                    />
                    <path
                      id="Path_1347"
                      data-name="Path 1347"
                      d="M14.089,8.6,8.361,14.7l1.348,1.348,5.728-6.1Z"
                      fill="#4a4a59"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_1348"
                      data-name="Path 1348"
                      d="M10.854,9.175A1.718,1.718,0,1,1,9.136,7.457a1.718,1.718,0,0,1,1.718,1.718"
                      fill="#4a4a59"
                      fill-rule="evenodd"
                      opacity="0.3"
                    />
                    <path
                      id="Path_1349"
                      data-name="Path 1349"
                      d="M14.864,16.622A1.718,1.718,0,1,1,16.583,14.9,1.719,1.719,0,0,1,14.864,16.622Z"
                      fill="#4a4a59"
                      fill-rule="evenodd"
                      opacity="0.3"
                    />
                  </svg>
                  <p className="text-[15px] text-[#050505] font-medium">
                    Have a coupon?
                  </p>
                </div>
                <svg
                  onClick={() => setCoupon(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            ) : (
              <div className="flex bg-white justify-between items-center px-3 cursor-pointer w-full h-[44px] gap-x-2 border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm">
                <input
                  className="border-none outline-none text-[#3f3f3f] "
                  type="number"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon Code"
                ></input>
                <button
                  className={`text-base font-medium ${
                    isButtonDisabled ? "text-gray-400" : "text-blue-600"
                  }`}
                  disabled={isButtonDisabled}
                >
                  Apply Coupon
                </button>
              </div>
            )}
          </div>
          <div className="relative payment_summary bg-white rounded-b-md shadow-sm border-[0.5px] border-[#e6e9f2] mb-4">
            <div className="payment_summary-cutout relative bg-transparent h-4 z-[1] m-[-20px_0px_24px]" />
            <div className="flex flex-col gap-y-3">
              <div className="px-3 md:px-6">
                <p className="text-[#3f3f3f] font-medium mb-1">Service</p>
                <div className="flex flex-col gap-y-1">
                  <div className="flex justify-between text-sm gap-x-12 lg:gap-x-16 items-center">
                    <div className="text-[#656565]">
                      <p className="text-xs text-black opacity-50">
                        BUSINESS BREAKTHROUGH SEMINAR - Rajiv Talreja
                        -(Scalex-Fb)
                      </p>
                    </div>
                    <div className="text-[#3f3f3f] font-medium">₹99.00</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm border-t border-[#ced0d4] py-3 gap-x-12 lg:gap-x-16 px-3 md:px-6 border-dashed">
                <div className="text-[#050505] font-medium">
                  Amount to be paid :
                </div>
                <span className="text-[#050505] font-semibold text-right">
                  ₹99.00
                </span>
              </div>
            </div>
          </div>
          <div className="footer_bg fixed w-full bottom-0 left-0 md:relative lg:my-8 p-4 pt-6 md:p-0 z-10 md:z-auto">
            <button
              disabled
              className="w-full py-3 flex justify-center gap-x-2 items-center bg-[#3f3f3f] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] text-white text-base font-medium rounded-md transition-colors shadow disabled:bg-[#b2b2b2] disabled:opacity-75"
            >
              <span>Proceed to pay ₹99.00</span>
            </button>
            <div className="flex justify-center mt-3 md:mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="341"
                height="19.246"
                viewBox="0 0 341 19.246"
              >
                <g
                  id="payment_sprite"
                  data-name="payment sprite"
                  transform="translate(-1566 -694)"
                >
                  <rect
                    id="Rectangle_823"
                    data-name="Rectangle 823"
                    width="341"
                    height="19"
                    transform="translate(1566 694)"
                    fill="#fff"
                    opacity="0"
                  />
                  <g id="bhim-upi" transform="translate(1566.998 696.998)">
                    <path
                      id="Path_1432"
                      data-name="Path 1432"
                      d="M.357,12.026h.33L.38,13.177a.446.446,0,0,0,.026.385.406.406,0,0,0,.349.13.65.65,0,0,0,.416-.13.7.7,0,0,0,.23-.385l.306-1.151h.334l-.313,1.18a1,1,0,0,1-.364.575,1.127,1.127,0,0,1-.684.191.729.729,0,0,1-.582-.19.625.625,0,0,1-.055-.576l.313-1.18ZM2,13.922l.524-1.971,1,1.159a2.054,2.054,0,0,1,.162.23l.35-1.314h.307L3.813,14,2.8,12.816a1.062,1.062,0,0,1-.142-.213l-.35,1.319H2Zm2.312,0,.5-1.9h.334l-.5,1.9H4.309Zm.812,0,.5-1.9H6.771l-.07.261h-.81l-.126.473h.811l-.072.27H5.693l-.237.892Zm1.513,0,.5-1.9h.333l-.5,1.9Zm.813,0,.5-1.9H9.1l-.07.261H8.216l-.127.476H8.9l-.072.27H8.017l-.162.613h.811l-.073.276Zm1.935-.279h.28a1.749,1.749,0,0,0,.355-.028.7.7,0,0,0,.227-.1.845.845,0,0,0,.235-.229,1.018,1.018,0,0,0,.143-.318.777.777,0,0,0,.026-.317.405.405,0,0,0-.114-.229.393.393,0,0,0-.183-.1,1.711,1.711,0,0,0-.371-.028H9.74l-.357,1.341Zm-.407.279.5-1.9h.45a3.024,3.024,0,0,1,.606.04.641.641,0,0,1,.277.137.56.56,0,0,1,.184.323.994.994,0,0,1-.028.45,1.314,1.314,0,0,1-.21.446,1.206,1.206,0,0,1-.7.46,2.811,2.811,0,0,1-.546.04h-.54Zm3.617-1.1h.086a.942.942,0,0,0,.385-.056.29.29,0,0,0,.145-.2c.026-.1.013-.172-.042-.214a.646.646,0,0,0-.348-.062h-.085l-.14.529Zm-.088.252-.226.85h-.312l.5-1.895h.5a1.551,1.551,0,0,1,.324.023.4.4,0,0,1,.165.074.313.313,0,0,1,.1.178.518.518,0,0,1-.011.247.727.727,0,0,1-.121.248.644.644,0,0,1-.4.253,1.885,1.885,0,0,1-.336.022H12.5Zm1.464.106h.572l-.1-.432a1.537,1.537,0,0,1-.02-.215,2.047,2.047,0,0,1-.131.215l-.325.432Zm.724.745-.1-.488h-.813l-.368.488h-.35l1.517-1.971.469,1.97h-.352Zm.83,0,.23-.868-.417-1.028h.35l.26.643a1.4,1.4,0,0,1,.045.152,1.525,1.525,0,0,1,.129-.16l.61-.635h.334l-.98,1.028-.23.868h-.331Zm3.182-.937c0-.014,0-.055.014-.121s.013-.1.017-.138a1.157,1.157,0,0,1-.163.262L17.767,14l-.262-1.03a1.091,1.091,0,0,1-.037-.242,1.252,1.252,0,0,1-.108.262l-.468.934h-.307l1.01-1.977.288,1.2q.023.129.044.258a2.748,2.748,0,0,1,.186-.26l.91-1.195-.03,1.977h-.31l.022-.937Zm.555.937.5-1.9h1.145l-.07.261h-.812l-.126.476h.812l-.072.27h-.812l-.163.613h.812l-.074.276Zm1.527,0,.524-1.971,1,1.159a2.065,2.065,0,0,1,.161.23l.35-1.314h.308L22.6,14l-1.016-1.18a1.057,1.057,0,0,1-.141-.213l-.35,1.319h-.308Zm3.4-1.635-.434,1.635h-.333l.434-1.635h-.545l.07-.261H24.8l-.069.261h-.542Zm.346,1.255.3-.113a.245.245,0,0,0,.087.193.375.375,0,0,0,.24.067.432.432,0,0,0,.257-.077.349.349,0,0,0,.142-.2c.03-.112-.044-.21-.22-.3l-.057-.029a1.014,1.014,0,0,1-.38-.276.371.371,0,0,1-.032-.3.648.648,0,0,1,.27-.376.832.832,0,0,1,.485-.144.68.68,0,0,1,.358.081.3.3,0,0,1,.15.233l-.293.124a.287.287,0,0,0-.1-.13.281.281,0,0,0-.159-.042.407.407,0,0,0-.23.064.3.3,0,0,0-.126.174c-.03.114.057.22.263.319l.037.018a.85.85,0,0,1,.35.253.369.369,0,0,1,.032.309.739.739,0,0,1-.3.428.913.913,0,0,1-.539.158.625.625,0,0,1-.4-.111.378.378,0,0,1-.135-.319Zm2.465.38.5-1.9h.333l-.5,1.9Zm.813,0,.524-1.971,1,1.159a2.065,2.065,0,0,1,.162.23l.35-1.314h.308L29.629,14l-1.016-1.18a1.058,1.058,0,0,1-.142-.213l-.35,1.319h-.307Zm3.4-1.635-.434,1.635h-.334l.434-1.635h-.545l.07-.261h1.42l-.069.261Zm.363,1.635.5-1.9h1.145l-.07.261h-.81l-.127.476h.811l-.072.27H32.15l-.163.613H32.8l-.073.276Zm2.15-1.088h.061a.822.822,0,0,0,.367-.057.3.3,0,0,0,.14-.2c.028-.1.017-.178-.034-.22a.545.545,0,0,0-.328-.065h-.06l-.145.544Zm-.084.24-.226.848h-.312l.5-1.9h.465a1.509,1.509,0,0,1,.311.024.4.4,0,0,1,.171.082.32.32,0,0,1,.1.178.514.514,0,0,1-.011.238.678.678,0,0,1-.214.357.714.714,0,0,1-.393.154l.477.863h-.377l-.457-.849h-.038Zm1.07.848.5-1.9h1.145l-.07.261h-.811l-.126.473h.812l-.072.27h-.812l-.237.892h-.333Zm2.035-.745h.572l-.1-.432a1.464,1.464,0,0,1-.02-.215,2.249,2.249,0,0,1-.132.215l-.325.432Zm.725.745-.1-.488H36.56l-.368.488h-.35l1.517-1.971.468,1.97h-.351ZM40,12.487a.736.736,0,0,0-.255-.167.97.97,0,0,0-.917.144.93.93,0,0,0-.348.517.558.558,0,0,0,.07.506.549.549,0,0,0,.465.2,1.141,1.141,0,0,0,.363-.06,1.576,1.576,0,0,0,.364-.18l-.093.348a1.355,1.355,0,0,1-.683.177,1.13,1.13,0,0,1-.416-.07.712.712,0,0,1-.3-.21.66.66,0,0,1-.145-.321.918.918,0,0,1,.024-.393,1.22,1.22,0,0,1,.184-.392,1.46,1.46,0,0,1,.726-.534,1.441,1.441,0,0,1,.447-.071,1.1,1.1,0,0,1,.332.048.958.958,0,0,1,.279.147l-.1.311Zm.032,1.435.5-1.9H41.68l-.07.261H40.8l-.126.476h.811l-.072.27H40.6l-.163.613h.811l-.073.276H40.032Z"
                      fill="#696a6a"
                    />
                    <path
                      id="Path_1433"
                      data-name="Path 1433"
                      d="M33.947,10.373H31.654L34.844,0h2.292L33.947,10.375ZM32.757.33a.89.89,0,0,0-.737-.3H19.41l-.624,2.032h11.47l-.668,2.17H20.412v0H18.12l-1.9,6.189h2.3l1.277-4.154H30.1a1.566,1.566,0,0,0,.91-.3,1.382,1.382,0,0,0,.562-.734L32.852,1.08a.775.775,0,0,0-.1-.75Zm-17.876,9.4a1.044,1.044,0,0,1-1.015.695H2.036a.867.867,0,0,1-.72-.3.757.757,0,0,1-.1-.734L4.1.03H6.4L3.818,8.39H13L15.578.031h2.3l-2.99,9.695Z"
                      fill="#66686c"
                    />
                    <path
                      id="Path_1434"
                      data-name="Path 1434"
                      d="M41.1.02,44,5.22l-6.1,5.2L41.1.02Z"
                      fill="#27803b"
                    />
                    <path
                      id="Path_1435"
                      data-name="Path 1435"
                      d="M39.061.02l2.9,5.2-6.1,5.2Z"
                      fill="#e9661c"
                    />
                  </g>
                  <g id="googlePay" transform="translate(1730 428)">
                    <path
                      id="Path_1436"
                      data-name="Path 1436"
                      d="M156.535,276.2v4.831h-1.6V269.1h4.258a3.951,3.951,0,0,1,2.757,1.033,3.342,3.342,0,0,1,0,5.049,3.938,3.938,0,0,1-2.757,1.016h-2.653Zm0-5.63v4.165h2.693a2.172,2.172,0,0,0,1.589-.617,1.97,1.97,0,0,0,0-2.915,2.144,2.144,0,0,0-1.589-.633h-2.693ZM166.8,272.6a4.1,4.1,0,0,1,2.809.908,3.148,3.148,0,0,1,1.03,2.491v5.031H169.1V279.9h-.07a3.1,3.1,0,0,1-2.653,1.4,3.546,3.546,0,0,1-2.364-.8,2.506,2.506,0,0,1-.951-2,2.383,2.383,0,0,1,1-2.014,4.375,4.375,0,0,1,2.678-.75,4.914,4.914,0,0,1,2.355.5v-.35a1.714,1.714,0,0,0-.662-1.357,2.336,2.336,0,0,0-1.55-.559,2.49,2.49,0,0,0-2.128,1.083l-1.415-.85A4,4,0,0,1,166.8,272.6Zm-2.078,5.931a1.21,1.21,0,0,0,.533,1,2.025,2.025,0,0,0,1.248.4,2.622,2.622,0,0,0,1.806-.716,2.2,2.2,0,0,0,.8-1.682,3.391,3.391,0,0,0-2.094-.571,2.809,2.809,0,0,0-1.631.45A1.328,1.328,0,0,0,164.719,278.532Zm14.731-5.664-5.361,11.76h-1.657l1.989-4.114-3.525-7.645h1.745l2.548,5.863h.034l2.478-5.863Z"
                      transform="translate(-2.647 -0.104)"
                      fill="#5f6368"
                    />
                    <path
                      id="Path_1437"
                      data-name="Path 1437"
                      d="M148.822,275.956a8.667,8.667,0,0,0-.124-1.46h-6.771v2.765h3.878a3.324,3.324,0,0,1-1.434,2.182v1.8h2.314a7.023,7.023,0,0,0,2.136-5.282Z"
                      transform="translate(-0.88 -1.026)"
                      fill="#4285f4"
                    />
                    <path
                      id="Path_1438"
                      data-name="Path 1438"
                      d="M141.259,283.25a6.871,6.871,0,0,0,4.758-1.733l-2.314-1.8a4.355,4.355,0,0,1-6.475-2.278h-2.385v1.85A7.18,7.18,0,0,0,141.259,283.25Z"
                      transform="translate(-0.08 -1.442)"
                      fill="#34a853"
                    />
                    <path
                      id="Path_1439"
                      data-name="Path 1439"
                      d="M137.149,276.965a4.3,4.3,0,0,1,0-2.748v-1.849h-2.385a7.179,7.179,0,0,0,0,6.448Z"
                      transform="translate(0 -0.682)"
                      fill="#fbbc04"
                    />
                    <path
                      id="Path_1440"
                      data-name="Path 1440"
                      d="M141.259,270.842a3.9,3.9,0,0,1,2.754,1.077l2.05-2.05a6.9,6.9,0,0,0-4.8-1.869,7.179,7.179,0,0,0-6.415,3.956l2.385,1.85a4.294,4.294,0,0,1,4.03-2.963Z"
                      transform="translate(-0.08 0)"
                      fill="#ea4335"
                    />
                  </g>
                  <g id="mastercard" transform="translate(1715.902 344)">
                    <path
                      id="Path_1445"
                      data-name="Path 1445"
                      d="M80.255,370.8v-.354h-.093l-.106.243-.107-.243h-.092v.354h.065v-.267l.1.231h.067l.1-.231v.267h.065Zm-.586,0v-.293h.119v-.06h-.3v.059H79.6v.294h.065Z"
                      transform="translate(-9.922 -5.027)"
                      fill="#f79410"
                    />
                    <path
                      id="Path_1446"
                      data-name="Path 1446"
                      d="M63.6,367.975H55.621V353.63H63.6Z"
                      transform="translate(-3.754 -0.68)"
                      fill="#ff5f00"
                    />
                    <path
                      id="Path_1447"
                      data-name="Path 1447"
                      d="M52.373,360.123a9.11,9.11,0,0,1,3.485-7.173,9.123,9.123,0,1,0,0,14.346,9.108,9.108,0,0,1-3.485-7.173"
                      fill="#eb001b"
                    />
                    <path
                      id="Path_1448"
                      data-name="Path 1448"
                      d="M75.762,360.123A9.123,9.123,0,0,1,61,367.3a9.124,9.124,0,0,0,0-14.346,9.123,9.123,0,0,1,14.76,7.173"
                      transform="translate(-5.144 0)"
                      fill="#f79410"
                    />
                  </g>
                  <g id="paytm" transform="translate(1645.354 695.354)">
                    <path
                      id="Path_1449"
                      data-name="Path 1449"
                      d="M47.343,5.294a3.351,3.351,0,0,0-3.161-2.242h-.031a3.337,3.337,0,0,0-2.415,1.03,3.341,3.341,0,0,0-2.415-1.03h-.03a3.33,3.33,0,0,0-2.184.812V3.606a.493.493,0,0,0-.491-.457H34.374a.5.5,0,0,0-.5.5v12.17a.5.5,0,0,0,.5.5h2.241a.493.493,0,0,0,.488-.428V7.147a.778.778,0,0,1,0-.087.816.816,0,0,1,.773-.751h.413a.871.871,0,0,1,.473.183.824.824,0,0,1,.3.655l.008,8.693a.5.5,0,0,0,.5.5h2.241a.5.5,0,0,0,.492-.473V7.136a.823.823,0,0,1,.365-.7.909.909,0,0,1,.412-.138H43.5a.819.819,0,0,1,.777.838l.008,8.682a.5.5,0,0,0,.5.5h2.241a.5.5,0,0,0,.5-.5V6.48a3.118,3.118,0,0,0-.17-1.186M32.172,3.181H30.89V1.1a.446.446,0,0,0-.538-.443c-1.421.39-1.136,2.358-3.73,2.526H26.37a.519.519,0,0,0-.108.013h0a.5.5,0,0,0-.388.482V5.917a.5.5,0,0,0,.5.5h1.352l0,9.5a.49.49,0,0,0,.49.49h2.216a.49.49,0,0,0,.489-.49v-9.5h1.255a.5.5,0,0,0,.5-.5V3.676a.5.5,0,0,0-.5-.5"
                      transform="translate(3.417 0)"
                      fill="#54c1f0"
                    />
                    <path
                      id="Path_1450"
                      data-name="Path 1450"
                      d="M27.525,2.878H25.284a.5.5,0,0,0-.494.5V8.008a.525.525,0,0,1-.525.517h-.938A.525.525,0,0,1,22.8,8l-.008-4.625a.5.5,0,0,0-.5-.5H20.056a.5.5,0,0,0-.5.5V8.452a3.18,3.18,0,0,0,3.306,3.3s1.448,0,1.493.008a.522.522,0,0,1,.007,1.036l-.038.007-3.277.012a.5.5,0,0,0-.5.5v2.24a.5.5,0,0,0,.5.5h3.664a3.179,3.179,0,0,0,3.306-3.3V3.374a.5.5,0,0,0-.5-.5M5.834,6.985V8.368a.526.526,0,0,1-.525.526H3.887V6.123H5.309a.524.524,0,0,1,.525.525Zm.2-4.107h-4.9a.486.486,0,0,0-.486.486v2.2s0,.008,0,.013,0,.021,0,.031v9.938a.483.483,0,0,0,.453.5H3.383a.5.5,0,0,0,.5-.5l.008-3.406H6.031A2.908,2.908,0,0,0,9.075,9.09V5.928A2.912,2.912,0,0,0,6.031,2.878m9.1,9.368v.35a.517.517,0,0,1-.008.082.519.519,0,0,1-.52.411h-.933a.512.512,0,0,1-.528-.493v-.423c0-.005,0-.011,0-.016v-1.48a.51.51,0,0,1,.527-.49H14.6a.511.511,0,0,1,.528.493v1.565Zm-.356-9.355h-3.11a.482.482,0,0,0-.5.465v.872c0,.005,0,.012,0,.017s0,.013,0,.019V5.457a.511.511,0,0,0,.527.492h2.961a.515.515,0,0,1,.446.474v.289a.5.5,0,0,1-.433.461H13.2a3.11,3.11,0,0,0-3.339,3.115v2.606a2.937,2.937,0,0,0,3.131,3.1h4.064a1.279,1.279,0,0,0,1.321-1.232v-8.5c0-2.062-1.063-3.364-3.6-3.364"
                      transform="translate(0 0.302)"
                      fill="#233266"
                    />
                  </g>
                  <g id="phonePe" transform="translate(1572.262 432.262)">
                    <circle
                      id="Ellipse_279"
                      data-name="Ellipse 279"
                      cx="8.44"
                      cy="8.44"
                      r="8.44"
                      transform="translate(47.738 263.739)"
                      fill="#5f259f"
                    />
                    <path
                      id="Path_1429"
                      data-name="Path 1429"
                      d="M62.406,271.289a.624.624,0,0,0-.613-.613H60.661l-2.594-2.971a.955.955,0,0,0-.99-.283l-.9.283a.209.209,0,0,0-.095.33l2.83,2.687H54.625a.223.223,0,0,0-.235.236v.471a.624.624,0,0,0,.613.613h.66v2.263c0,1.7.9,2.687,2.405,2.687a3.263,3.263,0,0,0,1.32-.236v1.512a.745.745,0,0,0,.755.755h.66a.3.3,0,0,0,.283-.283V272h1.088a.223.223,0,0,0,.235-.236v-.471Zm-3.02,4.055a2.249,2.249,0,0,1-.943.192c-.755,0-1.132-.377-1.132-1.226v-2.263h2.075v3.3Z"
                      transform="translate(-2.396 -1.312)"
                      fill="#fff"
                    />
                  </g>
                  <g id="ruPay" transform="translate(1665.989 579.277)">
                    <path
                      id="Path_1451"
                      data-name="Path 1451"
                      d="M178.782,117.711l3.329,6.61-7,6.612Z"
                      transform="translate(6.9 0.151)"
                      fill="#008c44"
                    />
                    <path
                      id="Path_1452"
                      data-name="Path 1452"
                      d="M176.782,117.711l3.323,6.61-6.992,6.612Z"
                      transform="translate(6.594 0.151)"
                      fill="#f47920"
                    />
                    <path
                      id="Path_1453"
                      data-name="Path 1453"
                      d="M130.011,128.68l3.319-11.957h5.3c1.659,0,2.767.263,3.33.8s.668,1.412.33,2.644a4.534,4.534,0,0,1-.94,1.815,4.364,4.364,0,0,1-1.666,1.144,1.456,1.456,0,0,1,1.118.834,3.107,3.107,0,0,1-.054,1.822l-.4,1.67v.046c-.118.467-.083.717.107.738l-.122.442h-3.589c.012-.281.035-.533.058-.744a3.53,3.53,0,0,1,.09-.5l.334-1.195a1.753,1.753,0,0,0,.023-1.3c-.158-.257-.511-.383-1.069-.383h-1.509l-1.15,4.122h-3.512Zm5.408-6.817h1.616a2.37,2.37,0,0,0,1.242-.248,1.431,1.431,0,0,0,.563-.865c.118-.42.089-.711-.078-.877a1.848,1.848,0,0,0-1.2-.251h-1.522l-.623,2.241Zm16.728-2.006L149.7,128.68h-2.974l.366-1.291a5.8,5.8,0,0,1-1.6,1.153,3.906,3.906,0,0,1-1.695.378,2.712,2.712,0,0,1-1.254-.265,1.714,1.714,0,0,1-.773-.8,2.3,2.3,0,0,1-.194-1.15,12.853,12.853,0,0,1,.481-2.27l1.268-4.577h3.251l-1.265,4.557a2.7,2.7,0,0,0-.138,1.391c.093.257.345.391.751.391a1.366,1.366,0,0,0,1.039-.451,3.162,3.162,0,0,0,.68-1.344l1.253-4.543h3.248Zm-1.18,8.823,3.315-11.957h4.56a10.857,10.857,0,0,1,2.341.19,2.892,2.892,0,0,1,1.312.613,2.444,2.444,0,0,1,.755,1.393,4.516,4.516,0,0,1-.172,1.962,5.645,5.645,0,0,1-1.95,3.076,5.548,5.548,0,0,1-3.457,1.061h-2.133l-1.015,3.661h-3.557Zm5.379-6.58h1.147a3.338,3.338,0,0,0,1.568-.269,1.538,1.538,0,0,0,.634-.949c.127-.459.095-.779-.1-.957a2.353,2.353,0,0,0-1.424-.27h-1.145l-.68,2.444Zm10.558,6.58.035-.837a5.954,5.954,0,0,1-1.591.874,5.045,5.045,0,0,1-1.7.285,1.947,1.947,0,0,1-2.111-2.805,3.259,3.259,0,0,1,1.28-1.937,7.449,7.449,0,0,1,3.066-.907c.181-.03.425-.053.73-.09,1.058-.122,1.653-.4,1.781-.865a.475.475,0,0,0-.13-.553,1.441,1.441,0,0,0-.841-.176,1.475,1.475,0,0,0-.834.217,1.3,1.3,0,0,0-.5.664h-3.171a3.657,3.657,0,0,1,1.749-2.245,6.832,6.832,0,0,1,3.459-.756,7.252,7.252,0,0,1,1.8.2,2.735,2.735,0,0,1,1.176.542,1.592,1.592,0,0,1,.547.957,3.752,3.752,0,0,1-.191,1.524l-1.364,4.919a.98.98,0,0,0-.028.436.521.521,0,0,0,.179.307l-.073.249H166.9Zm.791-3.939a12.039,12.039,0,0,1-1.352.417c-.876.235-1.369.549-1.476.936a.6.6,0,0,0,.078.588.8.8,0,0,0,.624.208,1.964,1.964,0,0,0,1.3-.4,2.579,2.579,0,0,0,.736-1.293c.029-.127.055-.217.072-.284l.022-.168Zm2.5,7.416.722-2.612h.93a1.35,1.35,0,0,0,.729-.173.937.937,0,0,0,.364-.576,2,2,0,0,0,.07-.377,4.183,4.183,0,0,0,0-.483l-.5-8.079H175.8l-.051,5.353,2.873-5.353h3.061l-5.08,8.78c-.577.982-1,1.656-1.261,2.025a4.188,4.188,0,0,1-.754.836,2.788,2.788,0,0,1-1.041.562,6.576,6.576,0,0,1-1.729.167q-.815,0-1.628-.069"
                      transform="translate(0 0)"
                      fill="#1b3281"
                    />
                  </g>
                  <g id="visa" transform="translate(1294 427.949)">
                    <path
                      id="Path_1454"
                      data-name="Path 1454"
                      d="M433.42,273.528c-.025,1.95,1.737,3.038,3.066,3.685,1.364.664,1.822,1.09,1.817,1.684-.01.909-1.089,1.309-2.1,1.325a7.325,7.325,0,0,1-3.6-.855l-.633,2.966a10.543,10.543,0,0,0,3.894.72c3.679,0,6.086-1.816,6.1-4.632.014-3.573-4.943-3.772-4.909-5.369.011-.484.473-1,1.486-1.132a6.6,6.6,0,0,1,3.454.605l.616-2.87a9.376,9.376,0,0,0-3.277-.6c-3.464,0-5.9,1.841-5.918,4.476m15.112-4.228a1.6,1.6,0,0,0-1.491.994l-5.254,12.547h3.676l.731-2.022h4.493l.424,2.022h3.24L451.524,269.3h-2.991Zm.514,3.659,1.06,5.084h-2.9l1.844-5.085ZM428.963,269.3l-2.9,13.541h3.5l2.9-13.541Zm-5.182,0-3.647,9.216-1.474-7.836a1.634,1.634,0,0,0-1.616-1.38h-5.961l-.083.394a14.59,14.59,0,0,1,3.456,1.151,1.482,1.482,0,0,1,.832,1.19l2.794,10.806h3.7l5.676-13.541h-3.679Z"
                      fill="#1a1f71"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm
