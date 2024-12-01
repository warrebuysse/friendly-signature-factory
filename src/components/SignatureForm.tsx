import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

interface SignatureFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    image: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignatureForm = ({ formData, handleInputChange, handleImageUpload }: SignatureFormProps) => {
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            defaultValue={formData.firstName}
            onChange={handleInputChange}
            className="border-gray-200 focus:border-[#7868ba]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={formData.lastName}
            onChange={handleInputChange}
            className="border-gray-200 focus:border-[#7868ba]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            defaultValue={formData.jobTitle}
            onChange={handleInputChange}
            className="border-gray-200 focus:border-[#7868ba]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={formData.email}
            onChange={handleInputChange}
            className="border-gray-200 focus:border-[#7868ba]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleInputChange}
            className="border-gray-200 focus:border-[#7868ba]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image" className="text-gray-700">Profile Picture</Label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border-gray-200 focus:border-[#7868ba] cursor-pointer"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SignatureForm;