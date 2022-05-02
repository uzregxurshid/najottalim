import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
export default function Main() {
  const [company, setCompany] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [building, setBuilding] = useState("");
  const [apartments, setApartments] = useState([]);
  const [apartment, setApartment] = useState("");
  const [banks, setBanks] = useState([]);
  const [bank, setBank] = useState("");
  const [year, setYear] = useState(5);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [monthlypayments, setMonthlyPayments] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getCompanies`)
      .then(res => res.json())
      .then(data => {
        setCompanyList(data);
      });
  }, []);
  const handleChange = event => {
    setCompany(event.target.value);
    setBuilding("");
    setApartment("");
    setApartment("");
    setApartments([]);
    setBank("");
    setBanks([]);
    setYear(5);

    fetch(
      `${process.env.REACT_APP_API}/api/getBuildings?id=${event.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        setBuildings(data);
      });
  };
  const handleBuildings = event => {
    setApartment("");
    setApartments([]);
    setBank("");
    setBanks([]);
    setYear(5);
    setBuilding(event.target.value);
    fetch(
      `${process.env.REACT_APP_API}/api/getApartments?id=${event.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        setApartments(data);
      });
  };

  const handleApartments = async event => {
    setBank("");
    setBanks([]);
    setYear(5);
    setApartment(event.target.value);
    fetch(
      `${process.env.REACT_APP_API}/api/getBanks?a=${event.target.value}&b=${building}&y=${year}`
    )
      .then(res => res.json())
      .then(data => {
        setBanks(data);
      });
  };

  const handleYears = event => {
    setBanks([]);
    setBank("");
    setYear(event.target.value);
   if (company && building && apartment) {
    fetch(
      `${process.env.REACT_APP_API}/api/getBanks?a=${apartment}&b=${building}&y=${event.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        setBanks(data);
      });
   }
  };

  const handleBanks = event => {
    setBank(event.target.value);
    const total = buildings.find(item=>item.id===building).price_per_square_meter*apartments.find(item=>item.id===apartment).area;
    const interestrate = banks.find(item=>item.id===event.target.value).interest_rate;
    const monthlyPayment = (total*Math.pow(1+(interestrate/100)/12,year*12)/year/12).toFixed(2);
    setMonthlyPayments(monthlyPayment);
  };

  const handleReset = () => {
    setCompany("");
    setBuilding("");
    setApartment("");
    setApartments([]);
    setBank("");
    setBanks([]);
    setYear(5);
  };

  const handleSubmit = () => {
    fetch(
      `${process.env.REACT_APP_API}/api/addApplication?b=${bank}&a=${apartment}&n=${name}&s=${surname}&e=${email}&p=${phone}&m=${monthlypayments}`
    )
      .then(res => res.json())
      .then(data => {
        if (data === "ok") {
          alert("Application submitted successfully");
          handleReset();
        }
        else{
          alert("Something went wrong");
        }
      });
  };
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" mx={"30px"}>
            Our Homes!
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box p={3} display={"flex"} flexWrap={"wrap"}>
        <Box width={"200px"} mr={"25px"} pt={"10px"}>
          <FormControl fullWidth>
            <InputLabel id="selectCompany">Company</InputLabel>
            <Select
              labelId="selectCompany"
              id="selectCompany"
              value={company}
              label="company"
              onChange={handleChange}
            >
              {companyList &&
                companyList.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Box width={"200px"} mr={"25px"} pt={"10px"}>
          <FormControl fullWidth>
            <InputLabel id="selectBuilding">Building</InputLabel>
            <Select
              labelId="selectBuilding"
              id="selectBuilding"
              value={building}
              label="building"
              onChange={handleBuildings}
            >
              {buildings &&
                buildings.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Box width={"200px"} mr={"25px"} pt={"10px"}>
          <FormControl fullWidth>
            <InputLabel id="selectApartment">Apartment</InputLabel>
            <Select
              labelId="selectApartment"
              id="selectApartment"
              value={apartment}
              label="apartment"
              onChange={handleApartments}
            >
              {apartments &&
                apartments.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item["count_of_rooms"]}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Box width={"200px"} mr={"25px"} pt={"10px"}>
          <FormControl fullWidth>
            <InputLabel id="selectYear">Year</InputLabel>
            <Select
              labelId="selectYear"
              id="selectYear"
              value={year}
              label="year"
              onChange={handleYears}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box width={"200px"} mr={"25px"} pt={"10px"}>
          <FormControl fullWidth>
            <InputLabel id="selectBank">Bank</InputLabel>
            <Select
              labelId="selectBank"
              id="selectBank"
              value={bank}
              label="bank"
              onChange={handleBanks}
            >
              {banks &&
                banks.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box p={3} display={"flex"} flexWrap={"wrap"}>
       {
         company&&(
          <Card sx={{ maxWidth: '345px', marginRight:'20px' }}>
          <CardMedia
            component="img"
            height="140"
            image={companyList.find(item=>item.id===company).picture}
            alt={companyList.find(item=>item.id===company).name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {companyList.find(item=>item.id===company).name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <b>Address</b>: {companyList.find(item=>item.id===company).address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <b>Phone:</b> {companyList.find(item=>item.id===company).phone}
            </Typography>
            {
              building&&(
                <>
                
                <Typography variant="body2" color="text.secondary">
                <b>Building:</b> {buildings.find(item=>item.id===building).name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                <b>Building address:</b> {buildings.find(item=>item.id===building).address}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                <b>Price per square meter:</b> {buildings.find(item=>item.id===building).price_per_square_meter}
                </Typography>
                </>
              )
            }

            {
              apartment&&(
                <>
                <Typography variant="body2" color="text.secondary">
                <b>Apartment:</b> {apartments.find(item=>item.id===apartment).count_of_rooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>Area:</b> {apartments.find(item=>item.id===apartment).area}
                </Typography>
                </>
              )
            }

            {
              year&&(
                <>
                <Typography variant="body2" color="text.secondary">
                <b>Year:</b> {year}
                </Typography>
                </>
              )
            }

            {
              building&&apartment&&(
                <>
                <Typography variant="body2" color="text.secondary">
                <b>Total:</b> {buildings.find(item=>item.id===building).price_per_square_meter*apartments.find(item=>item.id===apartment).area}
                </Typography>
                </>
              )
            }
          </CardContent>
        
        </Card>
         )
       }
        {
          bank&&(
            <Card sx={{ maxWidth: '345px', marginRight:'20px' }}>
            <CardMedia
              component="img"
              height="140"
              image={banks.find(item=>item.id===bank).picture}
              alt={banks.find(item=>item.id===bank).name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {banks.find(item=>item.id===bank).name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <b>Address</b>: {banks.find(item=>item.id===bank).address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <b>Phone:</b> {banks.find(item=>item.id===bank).phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Website:</b> {banks.find(item=>item.id===bank).website}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* loan period */}
                <b>Loan period:</b> {banks.find(item=>item.id===bank).loan_period} years
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Interest rate:</b> {banks.find(item=>item.id===bank).interest_rate}%
              </Typography>
              {/* monthly payment */}
              <Typography variant="body2" color="text.secondary">
                <b>Monthly payment:</b> {monthlypayments}
              </Typography>
           </CardContent>
           
          </Card>
          )
        }

        {
          bank&&(<Card sx={{ maxWidth: '345px', marginRight:'20px',display:'flex', flexDirection:"column", alignItems:'center' }}>
            <CardContent sx={{display:'flex', flexDirection:"column", alignItems:'center'}}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue={name}
              type={'text'}
              onInput={(e)=>setName(e.target.value)}
              sx={{paddingBottom:'10px'}}
            />
            <TextField
              required
              id="outlined-required"
              label="Surname"
              defaultValue={surname}
              type={'text'}
              onInput={(e)=>setSurname(e.target.value)}
              sx={{paddingBottom:'10px'}}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue={email}
              type={'email'}
              onInput={(e)=>setEmail(e.target.value)}
              sx={{paddingBottom:'10px'}}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone"
              defaultValue={phone}
              type={'number'}
              onInput={(e)=>setPhone(e.target.value)}
              sx={{paddingBottom:'10px'}}
            />
            </CardContent>
           <CardActions>
              <Button size="small" variant="contained" color={"primary"} onClick={handleSubmit}>Submit</Button>
              <Button size="small" variant="contained" color={"warning"} onClick={handleReset}>Reset</Button>
            </CardActions>
          </Card>)
        }

      </Box>
      
    </Box>
  );
}
