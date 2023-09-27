import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { region } from "../public/constants/data";
import Image from "next/image";
import one from "./images/75.png";
import two from "./images/emblem.png";
import three from "./images/g20.png";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// export
export default function Home() {
  return (
    <>
      {/* first navbar */}
      <div className="flex flex-row justify-around bg-turq">
        {/* icons */}
        <div className="flex flex-row items-center">
          <a href="" className="cursor-pointer m-1">
            <svg
              className="hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a>
          <a href="" className="cursor-pointer m-1">
            <svg
              className="hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          <a href="" className="cursor-pointer m-1">
            <svg
              className="hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>
          <a href="" className="cursor-pointer m-1">
            <svg
              className="hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
          </a>
        </div>
        {/* dropdown menu */}
        <div className="flex flex-row">
          {/* region */}
          <Select>
            <SelectTrigger className="w-[200px] rounded-full m-1">
              <SelectValue placeholder="PIB Region" />
            </SelectTrigger>

            <SelectContent>
              <ScrollArea className="h-[200px] w-[200px] rounded-md outline-none">
                {region.map((reg) => (
                  <SelectItem value={reg.id}>PIB {reg.type}</SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          {/* language */}
          <Select>
            <SelectTrigger className="w-[140px] rounded-full m-1 outline-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* second navbar */}
      <div className="flex flex-row h-28">
        <div className="flex flex-row">
          <Image src={two} className="logo -mr-10" alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="-ml-28 text-3xl font-bold">NewsEval</h1>
            <h3 className="-ml-28 text-xl font-semibold">PIB</h3>
            <h5 className="-ml-28 -mr-20 text-lg font-semibold">
              Government of India
            </h5>
          </div>
        </div>
        <div className="flex flex-row ">
          <Image src={one} className="logo ml-20" alt="" />
          <Image src={three} className="logo -ml-32" alt="" />
        </div>
      </div>
      {/* third navbar */}
      <div className="bg-oran flex flex-row justify-center">
        <h1 className="p-1 text-lg mx-5 font-medium hover:text-white cursor-pointer">
          Home
        </h1>
        <h1 className="p-1 text-lg mx-5 font-medium hover:text-white cursor-pointer">
          E-paper
        </h1>
        <h1 className="p-1 text-lg mx-5 font-medium hover:text-white cursor-pointer">
          Video-Content
        </h1>
        <h1 className="p-1 text-lg mx-5 font-medium hover:text-white cursor-pointer">
          About Us
        </h1>
        <h1 className="p-1 text-lg mx-5 font-medium hover:text-white cursor-pointer">
          Contact Us
        </h1>
      </div>
      {/* categories */}
      <div className="flex flex-row justify-center">
        {/* state */}
        <Select>
          <SelectTrigger className="w-[140px] rounded-full m-1 outline-none mx-20 mt-3 border-2 border-oran font-medium text-base">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">Delhi</SelectItem>
            <SelectItem value="Hindi">Kerala</SelectItem>
          </SelectContent>
        </Select>
        {/* district */}
        <Select>
          <SelectTrigger className="w-[140px] rounded-full m-1 outline-none mx-20 mt-3 border-2 border-oran font-medium text-base">
            <SelectValue placeholder="District" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">East Delhi</SelectItem>
            <SelectItem value="Hindi">North Delhi</SelectItem>
          </SelectContent>
        </Select>
        {/* department */}
        <Select>
          <SelectTrigger className="w-[140px] rounded-full m-1 outline-none mx-20 mt-3 border-2 border-oran font-medium text-base">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">Ministry of Education</SelectItem>
            <SelectItem value="Hindi">Ministry of Agriculture</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* tone radio button */}
      <div className="flex flex-row justify-center mt-4">
        <h1 className="mr-10 font-semibold text-base">Tonality</h1>
        <RadioGroup defaultValue="option-one" className="flex flex-row ml-2">
          <div className="flex items-center space-x-2 mx-2">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="text-turq"
            />
            <Label htmlFor="option-one" className="text-base">
              Favourable
            </Label>
          </div>
          <div className="flex items-center space-x-2 mx-2">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="text-turq"
            />
            <Label htmlFor="option-two" className="text-base">
              Neutral
            </Label>
          </div>
          <div className="flex items-center space-x-2 mx-2">
            <RadioGroupItem
              value="option-three"
              id="option-three"
              className="text-turq"
            />
            <Label htmlFor="option-three" className="text-base">
              Unfavourable
            </Label>
          </div>
          <div className="flex items-center space-x-2 mx-2">
            <RadioGroupItem
              value="option-four"
              id="option-four"
              className="text-turq"
            />
            <Label htmlFor="option-four" className="text-base">
              All
            </Label>
          </div>
        </RadioGroup>
      </div>
      {/* submit button */}
      <div className="flex flex-row justify-center mt-4">
        <Button
          variant="outline"
          className="bg-turq text-base text-white hover:bg-oran hover:text-white rounded-full"
        >
          Submit
        </Button>
      </div>
      {/* news */}
      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            aliquam adipisci voluptatibus! Ullam, deleniti dolorum. Eaque
            voluptatum ipsam labore repellat error alias. Commodi dolorum nobis
            doloremque amet dolorem error temporibus.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/08/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-green-500">
            Favorable
          </Badge>
        </div>
      </div>

      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            error corporis? Esse doloribus deleniti illo officiis odio hic,
            recusandae quos molestiae minus, praesentium, culpa voluptatibus
            possimus magni modi maxime! Sapiente? Nihil dolor deserunt, corporis
            officiis quod sint illum tempore, dignissimos repellendus unde
            earum. Molestias neque distinctio corrupti eligendi expedita ipsa
            asperiores beatae? Fugit iure possimus exercitationem magni!
            Eveniet, consectetur voluptates.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/09/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-gray-700">
            Neutral
          </Badge>
        </div>
      </div>

      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            error corporis? Esse doloribus deleniti illo officiis odio hic,
            recusandae quos molestiae minus, praesentium, culpa voluptatibus
            possimus magni modi maxime! Sapiente? Nihil dolor deserunt, corporis
            officiis quod sint illum tempore, dignissimos repellendus unde
            earum. Molestias neque distinctio corrupti eligendi expedita ipsa
            asperiores beatae? Fugit iure possimus exercitationem magni!
            Eveniet, consectetur voluptates.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/09/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-green-500">
            Favorable
          </Badge>
        </div>
      </div>
      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi
            et laborum culpa nobis dignissimos at optio architecto? Minima totam
            iusto harum odit numquam dolor laudantium architecto, sapiente
            nulla. Optio.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/09/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-red-600">
            Unfavorable
          </Badge>
        </div>
      </div>
      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi
            et laborum culpa nobis dignissimos at optio architecto? Minima totam
            iusto harum odit numquam dolor laudantium architecto, sapiente
            nulla. Optio.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/09/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-gray-700">
            Neutral
          </Badge>
        </div>
      </div>
      <div className="mx-56 p-1 border-2 border-gray-500 rounded-lg my-4">
        <div className="mb-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi
            et laborum culpa nobis dignissimos at optio architecto? Minima totam
            iusto harum odit numquam dolor laudantium architecto, sapiente
            nulla. Optio.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Badge
            variant="outline"
            className="mx-5 text-gray-500 border-2 border-gray-500"
          >
            Date:28/09/23
          </Badge>
          <Badge variant="outline" className="mx-5 text-white bg-red-600">
            Unfavorable
          </Badge>
        </div>
      </div>

      {/* footer */}
      <div className="h-10 bg-gray-600"></div>
      {/* second footer */}
      <div className="bg-gray-500">
        <p className="mx-10 text-black text-sm font-medium py-2">
          Site is hosted by National Informatics Centre (NIC). Information is
          provided and updated by Press Information Bureau “A” wing, Shastri
          Bhawan, Dr. Rajendra Prasad Road, New Delhi – 110001, Phone: 23389338.
        </p>
        <div className="flex flex-row justify-center py-2">
          <p className="text-base text-white">
            <span className="font-semibold">Last Updated On:</span> 25 Sep 2023
            17:39:00 PM
          </p>
        </div>
      </div>
    </>
  );
}
