import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Input,
  SimpleGrid,
  Tooltip,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import {
  MdOutlineCameraAlt,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';

type SimpleInputProps = {
  colSpan: number;
  label: string;
  placeholder: string;
};
const SimpleInput = ({ colSpan, label, placeholder }: SimpleInputProps) => (
  <GridItem colSpan={colSpan}>
    <FormControl>
      <FormLabel color="white">{label}</FormLabel>
      <Input
        _focus={{ borderColor: 'white' }}
        color="white"
        _placeholder={{ color: 'nu.text' }}
        variant="flushed"
        placeholder={placeholder}
      />
    </FormControl>
  </GridItem>
);

export const Form = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('nu.background', 'nu.dark');
  const cameraBgColor = useColorModeValue('nu.500', 'nu.background');
  const tooltipBgColor = useColorModeValue('nu.dark', 'nu.background');

  const photoBg = useColorModeValue('nu.800', 'nu.400');

  return (
    <Flex
      alignSelf="center"
      direction="column"
      bgColor={bgColor}
      w="100%"
      h="100vh"
      paddingX={[20, 30, 40]}
      paddingY={10}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" alignSelf="flex-start" color="white">
          Profile
        </Heading>
        <IconButton
          color="white"
          bgColor={photoBg}
          _hover={{ backgroundColor: cameraBgColor }}
          aria-label="switch dark mode"
          icon={
            colorMode === 'light' ? (
              <MdOutlineDarkMode />
            ) : (
              <MdOutlineLightMode />
            )
          }
          onClick={toggleColorMode}
        />
      </Flex>

      <Flex direction={['column-reverse', 'row']}>
        <VStack flex={2}>
          <SimpleGrid columns={1} spacing={2} w="100%" spacingY={8}>
            <SimpleInput
              colSpan={1}
              label="Username"
              placeholder="Your username"
            />
            <SimpleInput
              colSpan={1}
              label="First Name"
              placeholder="Your name"
            />
            <SimpleInput
              colSpan={1}
              label="Last Name"
              placeholder="Your last name"
            />
            <SimpleInput
              colSpan={1}
              label="Date of birth"
              placeholder="Your birthday (dd-mm-yyyy)"
            />
          </SimpleGrid>
        </VStack>

        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          bgColor={['transparent', photoBg, photoBg]}
          marginLeft={12}
          marginBottom={[10, 0, 0]}
          borderRadius={8}
        >
          <Tooltip
            bg={tooltipBgColor}
            color="white"
            label="Bora adicionar uma foto?"
            gutter={16}
          >
            <Button
              _hover={{ backgroundColor: 'nu.dark', color: 'black' }}
              borderRadius={30}
              width={100}
              height={100}
              backgroundColor={cameraBgColor}
            >
              <Icon
                w={50}
                h={50}
                color="white"
                as={MdOutlineCameraAlt}
                verticalAlign="center"
              />
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
