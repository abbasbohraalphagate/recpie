import { FlatList, RefreshControl, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constant';

interface FlatListComponentProps {
  data: any[];
  style?: object;
  onRefresh?: () => void;
  refreshing?: boolean;
  horizontal?: boolean;
  renderItem: ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => React.ReactElement | null;
  handleOnEndReached?: () => void;
  ListHeaderComponent?: React.ReactElement | null;
  ListFooterComponent?: React.ReactElement | null;
  contentContainerStyle?: object;
  ListFooterComponentStyle?: object;
  ItemSeparatorComponent?: React.ComponentType<any> | null;
  ListEmptyComponent?: React.ReactElement | null;
  onEndReachedThreshold?: number;
  onScrollBeginDrag?: (event: any) => void;
  viewabilityConfig?: object;
  onViewableItemsChanged?: (info: any) => void;
  numColumns: number;
}

const FlatListComponent: React.FC<FlatListComponentProps> = ({
  data,
  style,
  onRefresh,
  refreshing,
  horizontal,
  renderItem,
  handleOnEndReached,
  ListHeaderComponent,
  ListFooterComponent,
  contentContainerStyle,
  ListFooterComponentStyle,
  ItemSeparatorComponent,
  ListEmptyComponent,
  onEndReachedThreshold,
  onScrollBeginDrag,
  viewabilityConfig,
  onViewableItemsChanged,
  numColumns,
}) => {
  return (
    <FlatList
      data={data}
      horizontal={horizontal}
      ListEmptyComponent={ListEmptyComponent}
      style={style}
      scrollEnabled
      numColumns={numColumns}
      initialNumToRender={6}
      renderItem={renderItem}
      refreshControl={
        onRefresh && (
          <RefreshControl
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            refreshing={refreshing ?? false}
          />
        )
      }
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      onEndReachedThreshold={onEndReachedThreshold}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      onScrollBeginDrag={onScrollBeginDrag}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={(item, index) => index?.toString()}
      onEndReached={handleOnEndReached}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={contentContainerStyle}
      ListFooterComponentStyle={ListFooterComponentStyle}
      ListFooterComponent={ListFooterComponent ?? <View />}
    />
  );
};

export default FlatListComponent;
