const BrandFilter = () => {
  return (
    <select name="cars" id="cars" className="w-1/4 h-7/6 bg-bg rounded-md px-4">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};

export default BrandFilter;
