"use client"
import { SignOut } from '@/api/direct/SignOut'
import AddressCard from '@/components/common/AddressCard'
import Loading from '@/components/common/Loading'
import MoodleButton from '@/components/common/MoodleButton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { LOAD_PROFILE, REMOVE_PROFILE_PICTURE, UPDATE_GENERAL_PROFILE_DATA, UPDATE_PROFILE_PICTURE } from '@/lib/endpoints'
import { BEMOODLE_API, cn } from '@/lib/utils'
import { Button, Input } from '@nextui-org/react'
import { IconBucket } from '@tabler/icons-react'
import axios from 'axios'
import { Camera, Edit, Pen, ShoppingBag, Trash, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

const stores = [
  {
    id: 1,
    name: "WoodCraftman",
    description: "We craft beautiful and durable wooden furniture for your home.",
    storeCategory: {
      id: 1,
      name: "Furniture",
    }
  },
  {
    id: 2,
    name: "Doovex",
    description: "Fashion design store",
    storeCategory: {
      id: 1,
      name: "Fashion",
    }
  }
]

const Profile = () => {

  const [currentOption, setCurrentOption] = useState("General");
  const [loading, setLoading] = useState(true);


  // GENERAL OPTIONS --------------------------------
  const [userId, setUserId] = useState();
  const [getDisplayName, setDisplayName] = useState("");
  const [getUsername, setUsername] = useState("");
  const [getEmail, setEmail] = useState("");
  const [isGeneralEdited, setIsGeneralEdited] = useState(false);
  // GENERAL OPTIONS --------------------------------

  // ARTISAN OPTIONS --------------------------------
  const [isArtisan, setIsArtisan] = useState(true);
  const [storeList, setStoreList] = useState(stores);
  // ARTISAN OPTIONS --------------------------------

  //BILLING OPTIONS --------------------------------
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [haveAddress, setHaveAddress] = useState(false);
  const [addressList, setAddressList] = useState([]);
  //--NEW ADDRESS--
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [pcode, setPcode] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  //BILLING OPTIONS --------------------------------

  // ORDER OPTIONS --------------------------------
  const [haveOrder, setHaveOrder] = useState(false);
  const [orderList, setOrderList] = useState([]);
  // ORDER OPTIONS --------------------------------

  // PROFILE IMAGE --------------------------------
  const [haveAvatar, setHaveAvatar] = useState<boolean>(false);
  const [avatarLetters, setAvatarLetters] = useState("");
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [localFile, setLocalFile] = useState<File | undefined>(undefined);
  // PROFILE IMAGE --------------------------------

  const router = useRouter();

  // VALIDATE EMAIL ===============================>>

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (getEmail === "") return false;

    return validateEmail(getEmail) ? false : true;
  }, [getEmail]);

  // VALIDATE EMAIL ===============================>>

  // UPDATE PROFILE PICTURE =================
  const updateProfilePicture = async () => {

    if (!localFile) return;

    const formData = new FormData();
    formData.append("profile", localFile);

    const response = await axios.post(`${BEMOODLE_API}/${UPDATE_PROFILE_PICTURE}`, formData, {
      withCredentials: true,
    });

    if (response.status == 200) {
      console.log(response.data)
      setIsProfileModal(false)
      setLocalFile(undefined);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }

  };
  // UPDATE PROFILE PICTURE =================

  // REMOVE PROFILE PICTURE =================
  const removeProfilePicture = async () => {
    const response = await axios.get(`${BEMOODLE_API}/${REMOVE_PROFILE_PICTURE}`, { withCredentials: true });
    if (response.status === 200) {
      if (response.data.status) {
        setIsProfileModal(false);
        setLocalFile(undefined);
      }
    }
  }
  // REMOVE PROFILE PICTURE =================

  // ---------------------------------------------------------------- //
  //**  GENERAL PROFILE OPERATIONS ==================================== //
  const updateGeneralProfile = async () => {

    const preload = {
      username: getUsername,
      dName: getDisplayName,
      email: getEmail,
    }

    try {
      const response = await axios.post(`${BEMOODLE_API}/${UPDATE_GENERAL_PROFILE_DATA}`, JSON.stringify(preload),
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 200) {
        console.log(response.data)
        // setTimeout(() => {
        window.location.reload();
        // }, 200);
      }

    } catch (error) {
      console.error("Error processing request", error)
    }

  };

  useEffect(() => {

    const loadProfile = async () => {

      try {
        const response = await axios.get(`${BEMOODLE_API}/${LOAD_PROFILE}`,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {

          const data = response.data;
          console.log(data)

          if (data.status) {
            setIsArtisan(data.isArtisan);
            setStoreList(data.stores);
            setHaveAddress(data.haveAddress);
            setAddressList(data.addressList);
            setHaveOrder(data.haveOrders);
            setOrderList(data.orderList);
            setDisplayName(data.user.display_name);
            setEmail(data.user.email);
            setUsername(data.user.username);
            setLoading(false);
            setHaveAvatar(data.haveAvatar);
            setUserId(data.user.id);
            setIsGeneralEdited(false);

            
            if (!data.haveAvatar) {
              setAvatarLetters(data.avatar_letters);
            }

            console.log(data)

          } else if (data.message === "login") {
            console.log(data);
            router.push("/auth/signin");
          } else {
            console.warn("Unexpected response:", data.message);
          }

        } else {

          console.error("HTTP error status:", response.status);

        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }

    };

    loadProfile();

  }, [router]);

  if (loading) {
    return (
      <div><Loading /></div>
    )
  }

  return (

    <>
      {/* PROFILE IMAGE MODAL */}
      {isProfileModal &&
        <div className='fixed w-full h-full z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center'>
          <div className='w-[300px] h-auto bg-white rounded-[24px] flex flex-col items-center pt-[24px] pb-[24px] px-[20px]'>

            <div className='flex justify-between items-center w-full'>
              <div className='font-medium'>Bemoodle Account</div>
              <Button onClick={() => { setIsProfileModal(false); setLocalFile(undefined) }} className='min-h-0 min-w-0 h-auto p-0 m-0 rounded-full bg-transparent text-black group'>
                <div className=' bg-white border rounded-full p-2'>
                  <X size={18} />
                </div>
              </Button>
            </div>

            <div className='text-start pt-3 pb-4'>
              <div className='font-semibold'>Profile picture</div>
              <div className='text-[12px] opacity-60 pt-1'>A picture helps people recognize you and lets you know when you’re signed in to your account</div>
            </div>

            <div
              onClick={() => document.getElementById('profile-image-input')?.click()}
              className='border-[4px] w-fit h-fit rounded-full cursor-pointer'>
              <div className={cn(
                'relative w-[200px] h-[200px] rounded-full flex items-center justify-center',
                !haveAvatar && "bg-yellow-50"
              )}>
                {haveAvatar || localFile !== undefined ?
                  <Image
                    src={localFile ? URL.createObjectURL(localFile) : `${BEMOODLE_API}/user/${userId}/profile/avatar.png`}
                    alt='Choosen Image'
                    fill
                    className='rounded-full object-cover' />
                  :
                  <div className='text-[4rem] font-bold'>{avatarLetters?.toUpperCase()}</div>
                }
              </div>
              <Input
                id='profile-image-input'
                type="file"
                accept='image/*'
                className='hidden'
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setLocalFile(e.target.files[0]);
                  }
                }}

              />
            </div>

            {localFile !== undefined ?
              <div className='flex gap-3 pt-3 w-full '>
                <MoodleButton
                  className='gap-2 mt-3 flex-1 rounded-full'
                  variants='action'
                  onClick={() => updateProfilePicture()}
                >Save as Profile Picture</MoodleButton>
              </div>
              :
              <div className='flex gap-3 pt-3 w-full '>
                <MoodleButton
                  className='gap-2 mt-3 flex-1 rounded-full'
                  variants='action'
                  Icon={<Pen size={16} />}
                  onClick={() => document.getElementById('profile-image-input')?.click()}
                  IconDirection='left'>Change</MoodleButton>

                <MoodleButton
                  className='gap-2 mt-3 flex-1'
                  variants='logout'
                  Icon={<Trash size={16} />}
                  disabled={haveAvatar ? false : true}
                  onClick={() => removeProfilePicture()}
                  IconDirection='left'>Remove</MoodleButton>
              </div>
            }

          </div>
        </div>
      }

      {isAddressModal &&
        <div className='fixed w-full h-full z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center'>
          <ScrollArea className='w-[400px] h-full max-h-[80vh] rounded-[24px] bg-white'>
            <div className='w-full h-auto bg-white rounded-[24px] flex flex-col items-center pt-[24px] pb-[24px] px-[24px]'>

              <div className='w-full flex justify-between '>
                <div className='text-[1.4rem] font-bold'>New Address</div>
                <Button onClick={() => setIsAddressModal(false)} className='min-h-0 min-w-0 h-auto p-0 m-0 rounded-full bg-transparent text-black group'>
                  <div className=' bg-white border rounded-full p-2'>
                    <X size={18} />
                  </div>
                </Button>
              </div>
              <div className='text-[14px] text-start w-full opacity-60 pb-[24px]'>Add new address to your address pool</div>


              {/* FIRST NAME & LAST NAME */}
              <div className='flex items-center gap-5'>
                {/* FIRST NAME */}
                <div>
                  <div className='text-[14px] font-medium '>First Name</div>
                  <Input
                    type='text'
                    value={fname}
                    variant="bordered"
                    onValueChange={setFname}
                    placeholder='eg: Alex'
                    errorMessage="Please enter your first name"
                    className='drop-shadow-sm mt-3 '
                  />
                </div>
                {/* Last NAME */}
                <div>
                  <div className='text-[14px] font-medium '>Last Name</div>
                  <Input
                    type='text'
                    value={lname}
                    variant="bordered"
                    placeholder='eg: Carter'
                    onValueChange={setLname}
                    errorMessage="Please enter your last name"
                    className='drop-shadow-sm mt-3 '
                  />
                </div>
              </div>

              {/* LINE 1 & LINE 2 */}
              <div className='flex flex-col  gap-3 pt-3 w-full'>
                {/* LINE1 */}
                <div>
                  <div className='text-[14px] font-medium '>Line1</div>
                  <Input
                    type='text'
                    value={line1}
                    variant="bordered"
                    onValueChange={setLine1}
                    placeholder='eg: No. 11/B ...'
                    errorMessage="Please enter address line 1"
                    className='drop-shadow-sm mt-3 w-full'
                  />
                </div>
                {/* LINE2 */}
                <div>
                  <div className='text-[14px] font-medium '>Line2</div>
                  <Input
                    type='text'
                    value={line2}
                    variant="bordered"
                    onValueChange={setLine2}
                    placeholder='eg: Woodlands Avenue ...'
                    errorMessage="Please enter address line 2"
                    className='drop-shadow-sm mt-3 w-full'
                  />
                </div>
              </div>

              {/* POSTAL CODE & MOBILE NUMBER */}
              <div className='flex items-center gap-5 pt-3'>
                {/* POSTAL CODE */}
                <div>
                  <div className='text-[14px] font-medium '>Postal Code</div>
                  <Input
                    type='text'
                    value={pcode}
                    variant="bordered"
                    placeholder='eg: 81400'
                    onValueChange={setPcode}
                    errorMessage="Please enter your postal code"
                    className='drop-shadow-sm mt-3 '
                  />
                </div>
                {/* MOBILE NUMBER */}
                <div>
                  <div className='text-[14px] font-medium '>Mobile Number</div>
                  <Input
                    type='text'
                    value={mobile}
                    variant="bordered"
                    placeholder='XXX-XXX-XXXX'
                    onValueChange={setMobile}
                    errorMessage="Please enter your mobile number"
                    className='drop-shadow-sm mt-3 '
                  />
                </div>
              </div>

              <div className='flex items-center gap-5 w-full pt-3'>
                {/* COUNTRIES */}
                <div className='flex flex-col items-start flex-1'>
                  <div className='text-[14px] font-medium pb-3'>Country</div>
                  <Select >
                    <SelectTrigger className="w-full  h-full  rounded-[12px] border-2 border-black">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className='z-[200]'>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        {countryList.map((co, idx) => (
                          <SelectItem key={idx} value="apple">Apple</SelectItem>
                        ))}

                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* STATES */}
                <div className='flex flex-col items-start flex-1'>
                  <div className='text-[14px] font-medium pb-3'>State</div>

                  <Select >
                    <SelectTrigger className="w-full h-full rounded-[12px] border-2 border-black">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className='z-[200]'>
                      <SelectGroup>
                        <SelectLabel>State</SelectLabel>
                        {stateList.map((st, idx) => (
                          <SelectItem key={idx} value="apple">Apple</SelectItem>
                        ))}
                     
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* STATES */}
              <div className='flex flex-col items-start pt-5 w-full'>
                <div className='text-[14px] font-medium pb-3'>City</div>

                <Select >
                  <SelectTrigger className="w-full h-full rounded-[12px] border-2 border-black">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className='z-[200]'>
                    <SelectGroup>
                      <SelectLabel>City</SelectLabel>
                      {cityList.map((ct, idx) => (
                          <SelectItem key={idx} value="apple">Apple</SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <MoodleButton
                className='gap-2 mt-5 flex-1 rounded-[12px] w-full'
                variants='action'
                onClick={() => updateProfilePicture()}
              >Save Address</MoodleButton>

            </div>
          </ScrollArea>
        </div>
      }


      <div className='flex flex-col items-center pt-[78px] pb-[60px] min-h-screen'>


        <WrapperBody>
          <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col pt-[60px] max-w-[878px] w-full'>

              <div className='flex items-center gap-4'>
                <div className='relative w-[40px] h-[40px] rounded-full border bg-slate-50 group flex justify-center items-center'>
                  {haveAvatar ?
                    <Image src={`${BEMOODLE_API}/user/${userId}/profile/avatar.png`} alt='' fill className='rounded-full object-cover' />
                    :
                    <div className='font-bold text-[14px] text-black'>{avatarLetters?.toUpperCase()}</div>
                  }
                  <div onClick={() => setIsProfileModal(true)} className='absolute hidden group-hover:block w-full h-full text-white cursor-pointer'>
                    <div className='w-full h-full rounded-full bg-black/40 flex items-center justify-center'>
                      <Camera size={14} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='font-medium'>{getDisplayName} / {currentOption}</div>
                  <div className='text-[12px] opacity-60'>Update your profile and manage your account</div>
                </div>
              </div>


              <div className='pt-[40px] flex mobile:flex-col'>
                {/* SIDEPANEL | GENERAL, ORDERS, ADDRESS, LOGOUT */}
                <div className='flex flex-col mobile:flex-row mobile:w-full mobile:pb-[40px] mobile:gap-6 mobile:flex-wrap items-start  gap-3 w-[180px]'>
                  {['General', 'Artisan', 'Billing', 'Orders',].map((option, idx) => (
                    <Button onClick={() => setCurrentOption(option)} key={idx} className='min-h-0 min-w-0 rounded-none h-auto  p-0 m-0 bg-transparent'>
                      <div className={cn(
                        'w-full text-start',
                        option === currentOption ? 'text-black font-semibold' : 'text-black/60 font-medium'
                      )}>
                        <div>{option}</div>
                      </div>
                    </Button>
                  ))}
                  <Button onClick={async () => {

                      const res = await SignOut();

                      if(res === "OK"){
                        router.push("/auth/signin");
                      }

                   }} className='min-h-0 min-w-0 rounded-none h-auto  p-0 m-0 bg-transparent'>
                    <div className={cn(
                      'w-full text-start',
                      'text-rose-500 font-semibold'
                    )}>
                      <div>Logout</div>
                    </div>
                  </Button>
                </div>

                {/* CONTENT */}
                <div className='flex-1 min-h-80 '>

                  {currentOption === "General" ?
                    <div className='flex flex-col gap-6'>

                      {/* DISPLAY NAME */}
                      <div>
                        <div className='text-[14px] font-medium '>Display Name</div>
                        <Input
                          type='text'
                          value={getDisplayName}
                          variant="bordered"
                          onValueChange={(value) => { setDisplayName(value); setIsGeneralEdited(true) }}
                          errorMessage="Please enter your name"
                          className='drop-shadow-sm mt-3 '
                        />
                      </div>

                      {/* USERNAME */}
                      <div>
                        <div className='text-[14px] font-medium '>Username</div>
                        <Input
                          type='text'
                          value={getUsername}
                          variant="bordered"
                          onValueChange={(value) => { setUsername(value); setIsGeneralEdited(true) }}
                          errorMessage="Please enter username"
                          className='drop-shadow-sm mt-3'
                        />
                        <div className='text-[14px] font-medium pt-1 opacity-40'>Your Bemoodle URL: https://bemoodle.com/<span className='font-bold'>{getUsername}</span></div>
                      </div>

                      {/* EMAIL */}
                      <div>
                        <div className='text-[14px] font-medium '>Email</div>
                        <Input
                          type='email'
                          value={getEmail}
                          variant="bordered"
                          isInvalid={isInvalidEmail}
                          color={isInvalidEmail ? "danger" : "default"}
                          errorMessage="Please enter a valid email"
                          onValueChange={(value) => { setEmail(value); setIsGeneralEdited(true) }}
                          className='drop-shadow-sm mt-3 '
                        />
                      </div>

                      <div className='w-full flex justify-end'>
                        <Button disabled={!isGeneralEdited} variant={!isGeneralEdited ? "bordered" : "solid"} onClick={updateGeneralProfile}>Save Changes</Button>
                      </div>

                    </div>
                    : currentOption === "Artisan" ?
                      <div>
                        {isArtisan ?
                          <div>
                            <div className='font-medium'>My Stores</div>
                            <div className='text-[12px] font-medium text-black/40 pb-6'>Manage Your Stores</div>
                            <div className='flex flex-col gap-3'>
                              {storeList.map((store) => (
                                <Link href={"/stores/" + store.name} key={store.id}>
                                  <div className={`hover:bg-moodleShadeYellow hover:border-black cursor-pointer  w-full rounded-[24px] border  border-[#0000001f] box-border p-[30px] flex flex-col items-start`}>
                                    <div className='text-[1.5rem] font-semibold'>{store.name}</div>
                                    <div className='text-[14px] font-medium mt-[12px]'>{store.description}</div>
                                    <div className='text-[10px] mt-[16px] font-semibold bg-moodleShadeYellow border border-black py-[6px] px-[8px] rounded-[6px] w-fit'>{store.storeCategory?.name}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          :
                          <div className='w-full bg-moodleYellow h-[200px] rounded-md flex flex-col items-center justify-center relative'>
                            <Image src={"/profile/new_store.jpg"} fill alt='New Store' className='object-cover rounded-md' />
                            <div className='z-[100] flex flex-col items-center text-white'>
                              <div className='font-semibold text-2xl '>Become a Artisan with opening Seller Store!</div>
                              <div className='pb-4 text-[12px] font-medium '>Start selling your skills in world largest artisan marketpalce.</div>
                              <Link href={"/stores"}><MoodleButton Icon={<IconBucket />} className='px-6 bg-moodleYellow hover:text-white text-black text-[12px] font-semibold' variants='border'>Start Selling</MoodleButton></Link>
                            </div>
                            <div className='w-full h-full rounded-md absolute bg-black/10'></div>
                          </div>
                        }

                      </div>
                      : currentOption === "Billing" ?
                        <div>

                          {/* TITLE & ACTION */}
                          <div className='flex items-center justify-between w-full'>
                            <div>
                              <div className='font-medium'>Address Pool</div>
                              <div className='text-[12px] font-medium opacity-60'>Add your shipping addresses</div>
                            </div>
                            <Button onClick={() => setIsAddressModal(true)} className='text-[12px] py-2 px-4 min-h-0 h-auto'>Add New</Button>
                          </div>

                          {/* ADDRESS CARDS */}
                          {haveAddress ?
                            <div className='flex flex-wrap gap-[20px] pt-[30px]'>
                              {addressList.map((adrs, idx) => (
                                <AddressCard
                                  id={idx + 1}
                                  fname='Nethmina'
                                  lname='Sandaruwan'
                                  line1='No. 132/A Mederikanaththa'
                                  line2='Ehalape, Maliduwa'
                                  pcode='81400'
                                  mobile='0743837327'
                                  country='Sri Lanka'
                                  state='Southern Province'
                                  city='Akuressa'
                                  key={idx} />
                              ))}
                            </div>
                            :
                            <div className='w-full h-[300px] border rounded-[24px] p-[20px] mt-[30px] flex flex-col items-center justify-center'>
                              <div className='text-[2rem] font-bold'>Pool is Empty🎈</div>
                              <div>Add your new address to ship your orders!</div>
                            </div>
                          }

                        </div>
                        : currentOption === "Orders" ?

                          <div>
                            <div>
                              <div className='font-medium'>My Orders</div>
                              <div className='text-[12px] font-medium text-black/40 pb-6'>View orders your made.</div>
                            </div>
                            {haveOrder ?
                              <div>

                              </div>
                              :
                              <div className='w-full h-[300px] border rounded-[24px] p-[20px] flex flex-col items-center justify-center'>
                                <div className='text-[2rem] font-bold'>Pool is Empty📦</div>
                                <div>You not yet made any orders!</div>
                                <MoodleButton className='gap-2 mt-3' variants='action' Icon={<ShoppingBag size={20} />} IconDirection='left'> Shop Now</MoodleButton>
                              </div>
                            }
                          </div>

                          : ""
                  }

                </div>
              </div>

            </div>
          </div>
        </WrapperBody>
      </div>
    </>
  )
}

export default Profile
