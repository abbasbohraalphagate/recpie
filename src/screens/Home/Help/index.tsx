import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Linking,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import TouchableComponent from '../../../component/TouchableComponent';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import Ionicons from '@react-native-vector-icons/ionicons';

type FAQ = {
  id: string;
  question: string;
  answer: string;
  question1: string;
};

const SAMPLE_FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How do I add a new recipe?',
    question1: 'How do I add a new recipe?',
    answer:
      'Tap the + button on the bottom bar, fill in the recipe details and save.',
  },
  {
    id: '2',
    question: 'Can I import recipes from other apps?',
    question1: 'How do I add a new recipe?',
    answer:
      'You can import from supported formats via Settings → Import. Supported formats: JSON, CSV.',
  },
  {
    id: '3',
    question: 'How do I backup my recipes?',
    answer:
      'Go to Settings → Backup and follow the prompts to export or sync with cloud.',
    question1: 'How do I add a new recipe?',
  },
  {
    id: '4',
    question: 'Where are favorites stored?',
    answer:
      'Favorites are stored locally on your device. Use Backup to export them.',
    question1: 'How do I add a new recipe?',
  },
];

export default function HelpScreen(): JSX.Element {
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandId, setExpandId] = useState<string | null>(null);

  const faqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_FAQS;
    return SAMPLE_FAQS.filter(
      f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    );
  }, [query]);

  function toggleExpand(id: string) {
    setExpandedId(prev => (prev === id ? null : id));
  }
  function toggleIsExpand(id: string) {
    setExpandId(prev => (prev === id ? null : id));
  }
  function contactSupport() {
    const subject = encodeURIComponent('Help with Recipe App');
    const body = encodeURIComponent('Describe your issue or question here:\n');
    const mailto = `mailto:support@example.com?subject=${subject}&body=${body}`;
    Linking.canOpenURL(mailto).then(supported => {
      if (supported) Linking.openURL(mailto);
    });
  }

  function renderItem({ item }: { item: FAQ }) {
    const expanded = item.id === expandedId;
    const isExpand = item.id === expandId;
    return (
      <View style={styles.itemContainer}>
        <TouchableComponent
          onPress={() => toggleExpand(item.id)}
          style={styles.questionRow}
        >
          <Label
            labelContent={item?.question}
            size={16}
            color={COLORS.black}
            family={FONTS.PoppinsMedium}
          />
          <Ionicons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={16}
            color={COLORS.black}
          />
        </TouchableComponent>

        {expanded ? (
          <View>
            <TouchableComponent
              onPress={() => toggleIsExpand(item.id)}
              style={styles.questionRow}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
              >
                <Ionicons name={'color-wand'} size={16} color={COLORS.black} />
                <Label
                  labelContent={item?.question1}
                  size={14}
                  color={COLORS.black}
                  family={FONTS.PoppinsRegular}
                />
              </View>
            </TouchableComponent>
            {isExpand && (
              <Label
                labelContent={item?.answer}
                size={14}
                color={COLORS.black}
                family={FONTS.PoppinsRegular}
                mt={8}
              />
            )}
          </View>
        ) : null}
      </View>
    );
  }

  return (
    <ScrollView style={styles.safe}>
      <FlatList
        data={faqs}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No results found.</Text>
          </View>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  subtitle: {
    marginTop: 6,
    color: '#6b7280',
  },
  searchContainer: {
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 12,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  chev: {
    marginLeft: 8,
    color: '#6b7280',
    fontSize: 18,
  },
  answerText: {
    marginTop: 8,
    color: '#374151',
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  small: {
    color: '#6b7280',
    fontSize: 12,
  },
  empty: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: '#6b7280',
  },
});
