import {ChangeEvent, FC, useState} from 'react';
import { Text, View, TextInput } from 'react-native';



export enum HairColor {
    Blonde = "your hair is blod, good for you",
    Brown = "brown is cool",
    Pink = 'unique and beautiful color',
}

interface IPersonProps {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
}

export const Person: FC<IPersonProps> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null>('');


  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <TextInput placeholder='Write down your country' onChangeText={newText => setCountry(newText)}/>
      <Text>{country}</Text>
      <Text>{hairColor}</Text>
    </View>
  );
}
