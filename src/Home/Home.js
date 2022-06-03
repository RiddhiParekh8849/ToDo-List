import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImageLinks from '../../assets/ImageLinks';
import colors from '../../assets/colors';
import styles from './style';

const Home = () => {
  const [itemArr, setData] = useState([
    {
      id: 1,
      title: 'Pick up grand ma',
    },
    {
      id: 2,
      title: 'Wash my clothes',
    },
    {
      id: 3,
      title: 'Water plants',
    },
    {
      id: 4,
      title: 'Call manager',
    },
    {
      id: 5,
      title: 'Get bike repaired',
    },
  ]);

  const tabs = [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Completed',
    },
    {
      id: 3,
      title: 'Remaining',
    },
  ];

  const [allValue] = useState(itemArr);
  const [searchValue] = useState();
  const [addValue, setAddValue] = useState();
  const [isAdd, setIsAdd] = useState(false);
  const [completedToDo, setCompletedToDo] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {}, [itemArr]);

  const onSearch = (value) => {
    let tempArr = [];
    if( value != '') {
      itemArr.map((data) => {
        if((data.title).toLowerCase().includes((value).toLowerCase())) {
          tempArr.push(data);
        }
      })
      setData(tempArr);
    }
    else {
      setData(allValue);
    }
  }
  

  const onSelectCheckBox = (item) => {
    let tempCompletedTodoArr = completedToDo;

    if(!tempCompletedTodoArr.includes(item.id)) {
      setCompletedToDo((pre) => {return [...pre, item.id]});
    }else {
      const temp = tempCompletedTodoArr.filter((data) => data !== item.id);
      setCompletedToDo(temp);
    }
  };

  const onDelete = (item) => {
    let tempArr = [];

    itemArr.map((data, index) => {
      if(data.id != item.id) {
        tempArr.push(data);
      }
    });

    setData(tempArr);
  }

  const onPressAdd = () => {
    setIsAdd(true);
  }

  const onAdd = () => {
    if(addValue === undefined) return;
    let temp = {
      id: parseInt(Math.random()),
      title: addValue
    }

    setData([...itemArr, temp]);
    setIsAdd(false);
  }

  const handleTabbing = (data, index) => {
    if (data.title === "All") {
      setData(allValue);
    }
    else if(data.title === "Completed") {
      let completedChecklist = [];
      allValue.map((data, index) => {
        if(completedToDo.includes(data.id)) completedChecklist.push(data);
        
      })
      setData(completedChecklist);
    }
    else {
      let remainingChecklist = [];
      allValue.map((data, index) => {
        if(completedToDo.includes(data.id)) return;
        else {
          remainingChecklist.push(data);
        }
      })

      setData(remainingChecklist);
    }
    setActiveIndex(index);
  }

  const renderItem = ({ item }) => {
    return(
    <View key={item.id} style={styles.item}>
      <View style={styles.checkItemContainer}>
        <TouchableOpacity onPress={() => onSelectCheckBox(item)} style={[styles.deleteImg, { marginRight: 9}]}>
            <Image source={completedToDo.includes(item.id) ? ImageLinks.checkedImage : ImageLinks.unCheckedImage} style={styles.img} />
        </TouchableOpacity>
        <Text style={[styles.title, {textDecorationLine: completedToDo.includes(item.id) ? 'line-through' : 'none', color: completedToDo.includes(item.id) ? colors.grey : colors.white }]}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item)} style={styles.deleteImg}>
        <Image source={ImageLinks.deleteImage} style={styles.img} />
      </TouchableOpacity>
    </View>
  )};
  
  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>To Do List</Text>
        </View>
        { isAdd ?
            <View style={styles.addTextInput}> 
              <TextInput
                style={[styles.searchInput, {flex: 1}]}
                onChangeText={setAddValue}
                value={searchValue}
                placeholder="Add Item"
                placeholderTextColor={colors.grey}  
              />
              <TouchableOpacity onPress={onAdd}>
                <Image source={ImageLinks.doneImage} style={styles.doneImg} />
              </TouchableOpacity>
            </View>
          :
          <TextInput
            style={styles.searchInput}
            onChangeText={(txt) => onSearch(txt)}
            value={searchValue}
            placeholder="Search"
            placeholderTextColor={colors.grey} 
          />
        }
      <FlatList
        style={{margin: 15}}
        data={itemArr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomBar}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onPressAdd} style={styles.btnAdd}>
            <Image source={ImageLinks.addImage} style={styles.addImg} />
          </TouchableOpacity>
          <Text style={styles.txtTotalItems}>{itemArr.length + ' items'}</Text>
        </View>
        <View style={styles.tabContainer}>
          {
            tabs.map((data, index) => (
              <>
                <TouchableOpacity key={index} onPress={() => handleTabbing(data, index)}>
                  <Text style={styles.txtTab}>{data.title}</Text>
                {activeIndex == index ? <View style={styles.activeDot}></View> : null}
                </TouchableOpacity>
              </>
            ))
          }
        </View>
      </View>
      </View>
  );
};

export default Home;