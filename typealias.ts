type ID = string
type popularTag =  string
type MaybePOpularTag = popularTag | null

interface IUser {
    id: ID
}

const popularTags: popularTag[] = ['dragon', 'cofee']

const dragonsTaf: MaybePOpularTag = "dragons"




