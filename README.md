# Scrollbook

A mock GraphQL server made for a short workshop session on GraphQL schema design and API implementation.

## Overview

This is based on the [Social Network Kata](https://kata-log.rocks/social-network-kata).

The aim of this task is to design a GraphQL schema for a social network and to implement a server for it with mock data. Business requirements should be delivered to the team verbally, who design the schema according to these needs. Once the API is working with the mock data, some extra business requirements will come in that require the schema to change. Each requested change in turn should be evaluated and discussed, and it should be identified whether the change could break the query, break the client, or if the query is safe.

## Initial Business Requirements

We need to start building our social network, _Scrollbook™️_. For the first implementation, the requirements are:
- I want to be able to see a list of all my friends.
- I want to look up a single friend by name. I need to see their full name, age, gender, and location.
- I want to be able to make posts to my timeline.
- I want to look up the most recent ten posts made by a friend on their timeline.
- I want to comment on a post by a friend.

## Later Business Requirements

| Requirement                                                                                        | Expected Schema Change
|----------------------------------------------------------------------------------------------------|--------------------------------------
| We need to split up name into First and Last Name.                                                 | add fields, remove field
| Gender is not a binary. We need to add the options "Other" and "Prefer not to say".                | add enum value used in query field
| Can we sort the friends list by "friendship factor"?                                               | add enum value used in input field
| Friendship factor was a bad idea, nobody is using it. Can we delete "friendship factor"?           | remove enum value used in input field
| Can we make the age say "years and months"?                                                        | change type from Int to String
| Can we make Location less ambiguous? People in London, Ontario are matching people in London, UK.  | change string to a complex type.

## GraphQL questions to answer in the abstract

Which of the following changes break queries, break clients, or can be made safely?
- Add/remove optional/required input/query field (8 different cases)
- Make input/query field non-optional (2 different cases)
- Make input/query field optional (2 different cases)
- Add/remove possible enum value to an enum used in an query/input type (4 different cases)
- Change type of scalar/object input/query field (4 different cases)

## Links

- GraphQL: <https://graphql.org/>
- The Star Wars GraphQL API: <https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master>
- Apollo Server: <https://www.apollographql.com/docs/apollo-server/>
- Mocking Apollo Server: <https://www.apollographql.com/docs/apollo-server/testing/mocking/#using-existing-resolvers-with-mocks>
- Ngrok: <https://ngrok.com/>
- Casual (generators for random data): <https://github.com/boo1ean/casual>
