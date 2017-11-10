// GROUP_VERSIONS
//     ID: 2404
//     MACHINE_NAME: DINO_TESTING_GROUP_NAME
//     GROUP_OBJECT_ID: 2867
//
// GROUPS
//     ID: 2867
//     MACHINE_NAME: FNL_CRTF_SBSTN_CMPLT
//     NARRATIVE: This survey form is always required for final submissions.
//     TITLE: Final Certificate of Substantial Completion
//     TITLE_INTERNAL: Final Certificate of Substantial Completion
//
// GROUP_HIERARCHIES
//     ID:
//     PARENT_ID:
//     GROUP_ID:
//     POSITION:
//     RULE_ID:
//     NARRATIVE:

let 2404 = {
  "id": 2404,
  "machineName": "DINO_TESTING_GROUP_NAME",
  "group": {
    "@id": "1",
    "id": 2867,
    "position": 1,
    "narrative": null,
    "rule": null,
    "group": {
      "@id": "2",
      "id": 2767,
      "machineName": "DINOSAURS",
      "title": "Dinosaurs#@!",
      "titleInternal": "Dinosaurs",
      "narrative": "<p>tests require no instruction!</p>
      "footer": null,
      "type": {
        "id": 1,
        "machineName": "SURVEY",
        "name": "Survey",
        "dateArchived": null,
        "archivedBy": null
      },
      "format": null,
      "dateArchived": null,
      "archivedBy": null,
      "questions": [],
      "children": [
        {
          "@ref": "1"
        }
      ],
      "buttonLabelAdd": null,
      "rowLabelColumnHeader": null,
      "buttonLabelRemove": null,
      "rowLabels": [],
      "nonChildQuestions": [],
      "childCount": 1
    },
    "children": [
      {
        "@id": "3",
        "id": 2873,
        "position": 1,
        "narrative": null,
        "rule": null,
        "group": {
          "@id": "4",
          "id": 2770,
          "machineName": "A_SECOND_PAGE",
          "title": "A second page",
          "titleInternal": "Second page",
          "narrative": "This is the second page of the survey!",
          "footer": null,
          "type": {
            "id": 4,
            "machineName": "PAGE",
            "name": "Page",
            "dateArchived": null,
            "archivedBy": null
          },
          "format": null,
          "dateArchived": null,
          "archivedBy": null,
          "questions": [],
          "children": [
            {
              "@ref": "3"
            },
            {
              "@id": "5",
              "id": 3104,
              "position": 2,
              "narrative": null,
              "rule": null,
              "group": {
                "@ref": "4"
              },
              "children": [
                {
                  "@id": "6",
                  "id": 3106,
                  "position": 1,
                  "narrative": null,
                  "rule": null,
                  "group": {
                    "@id": "7",
                    "id": 2827,
                    "machineName": "1231249",
                    "title": "123",
                    "titleInternal": "4561abba",
                    "narrative": "1011124",
                    "footer": null,
                    "type": {
                      "id": 2,
                      "machineName": "GROUP",
                      "name": "Group",
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "format": {
                      "id": 1,
                      "machineName": "STANDARD",
                      "name": "Standard Questions",
                      "allowMultipleRows": false,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "dateArchived": null,
                    "archivedBy": null,
                    "questions": [
                      {
                        "@id": "8",
                        "id": 3071,
                        "position": 1,
                        "rule": null,
                        "group": {
                          "@ref": "7"
                        },
                        "question": {
                          "id": 2386,
                          "type": {
                            "id": 3,
                            "machineName": "CHECKBOX",
                            "name": "Single Checkbox",
                            "allowAnswerChoices": false,
                            "dateArchived": null,
                            "archivedBy": null
                          },
                          "validations": [],
                          "questionAnswerChoices": [],
                          "ownerId": 3,
                          "machineName": "DOGS_MATRIX_TABLE_QUESTION",
                          "title": null,
                          "question": "Dogs question",
                          "helpText": "Helping out here, check it!",
                          "inputMask": null,
                          "labelClass": null,
                          "fieldClass": null,
                          "helpClass": null,
                          "answerChoicesRemoteUrl": null,
                          "dateArchived": null,
                          "archivedBy": null,
                          "answerChoicesFromRemoteUrl": null,
                          "groupQuestionCount": 3
                        },
                        "parent": null,
                        "children": [],
                        "validations": [],
                        "hasTotalRow": null,
                        "defaultValue": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "@id": "9",
                        "id": 3070,
                        "position": 2,
                        "rule": null,
                        "group": {
                          "@ref": "7"
                        },
                        "question": {
                          "id": 2389,
                          "type": {
                            "id": 4,
                            "machineName": "TEXT",
                            "name": "Text - Short",
                            "allowAnswerChoices": false,
                            "dateArchived": null,
                            "archivedBy": null
                          },
                          "validations": [],
                          "questionAnswerChoices": [],
                          "ownerId": 3,
                          "machineName": "MY_FOO_QUESTION3",
                          "title": null,
                          "question": "My Foo Question 3",
                          "helpText": null,
                          "inputMask": null,
                          "labelClass": null,
                          "fieldClass": null,
                          "helpClass": null,
                          "answerChoicesRemoteUrl": null,
                          "dateArchived": null,
                          "archivedBy": null,
                          "answerChoicesFromRemoteUrl": null,
                          "groupQuestionCount": 1
                        },
                        "parent": null,
                        "children": [],
                        "validations": [],
                        "hasTotalRow": null,
                        "defaultValue": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "@id": "10",
                        "id": 3316,
                        "position": 3,
                        "rule": null,
                        "group": {
                          "@ref": "7"
                        },
                        "question": {
                          "id": 2663,
                          "type": {
                            "id": 5,
                            "machineName": "SINGLE_CHOICE_EXPANDED",
                            "name": "Single Choice - Expanded",
                            "allowAnswerChoices": true,
                            "dateArchived": null,
                            "archivedBy": null
                          },
                          "validations": [],
                          "questionAnswerChoices": [],
                          "ownerId": 3,
                          "machineName": "REMOTE_CALL_URL_TEST",
                          "title": null,
                          "question": "Remote call URL test.",
                          "helpText": null,
                          "inputMask": null,
                          "labelClass": null,
                          "fieldClass": null,
                          "helpClass": null,
                          "answerChoicesRemoteUrl": "http://great.foo/Foo/[ENTITY_ID]",
                          "dateArchived": null,
                          "archivedBy": null,
                          "answerChoicesFromRemoteUrl": null,
                          "groupQuestionCount": 1
                        },
                        "parent": null,
                        "children": [],
                        "validations": [],
                        "hasTotalRow": null,
                        "defaultValue": null,
                        "dateArchived": null,
                        "archivedBy": null
                      }
                    ],
                    "children": [
                      {
                        "@ref": "6"
                      }
                    ],
                    "buttonLabelAdd": null,
                    "rowLabelColumnHeader": null,
                    "buttonLabelRemove": null,
                    "rowLabels": [],
                    "nonChildQuestions": [
                      {
                        "@ref": "8"
                      },
                      {
                        "@ref": "9"
                      },
                      {
                        "@ref": "10"
                      }
                    ],
                    "childCount": 1
                  },
                  "children": [],
                  "dateArchived": null,
                  "archivedBy": null
                }
              ],
              "dateArchived": null,
              "archivedBy": null
            }
          ],
          "buttonLabelAdd": null,
          "rowLabelColumnHeader": null,
          "buttonLabelRemove": null,
          "rowLabels": [],
          "nonChildQuestions": [],
          "childCount": 2
        },
        "children": [
          {
            "@id": "11",
            "id": 2874,
            "position": 1,
            "narrative": null,
            "rule": null,
            "group": {
              "@id": "12",
              "id": 2771,
              "machineName": "GROUP_WITH_A_MATRIX",
              "title": "Group with a matrix",
              "titleInternal": "Group with a matrix",
              "narrative": "Enter the matrix",
              "footer": null,
              "type": {
                "id": 2,
                "machineName": "GROUP",
                "name": "Group",
                "dateArchived": null,
                "archivedBy": null
              },
              "format": {
                "id": 2,
                "machineName": "MATRIX_TABLE",
                "name": "Matrix Table",
                "allowMultipleRows": true,
                "dateArchived": null,
                "archivedBy": null
              },
              "dateArchived": null,
              "archivedBy": null,
              "questions": [],
              "children": [
                {
                  "@ref": "11"
                }
              ],
              "buttonLabelAdd": "button to add",
              "rowLabelColumnHeader": "This is the row label header",
              "buttonLabelRemove": "button to remove",
              "rowLabels": [
                {
                  "@id": "13",
                  "id": 1401,
                  "group": {
                    "@ref": "12"
                  },
                  "rowIndex": 0,
                  "isDivider": false,
                  "label": "Fish",
                  "machineName": "FISH_MATRIX",
                  "helpText": "Are you a fish?",
                  "cssClasses": null,
                  "cssStyle": null,
                  "dateArchived": null,
                  "archivedBy": null
                },
                {
                  "@id": "14",
                  "id": 1402,
                  "group": {
                    "@ref": "12"
                  },
                  "rowIndex": 1,
                  "isDivider": false,
                  "label": "Cat",
                  "machineName": "CAT",
                  "helpText": "What?",
                  "cssClasses": null,
                  "cssStyle": null,
                  "dateArchived": null,
                  "archivedBy": null
                }
              ],
              "nonChildQuestions": [],
              "childCount": 1
            },
            "children": [],
            "dateArchived": null,
            "archivedBy": null
          }
        ],
        "dateArchived": null,
        "archivedBy": null
      },
      {
        "@id": "15",
        "id": 2870,
        "position": 2,
        "narrative": null,
        "rule": null,
        "group": {
          "@id": "16",
          "id": 2768,
          "machineName": "PG_LDS_NXT_THNG",
          "title": "This is the page that leads to the next thing",
          "titleInternal": "Next Thing",
          "narrative": "B symbols often won't show when you want one but that's just fine.",
          "footer": null,
          "type": {
            "id": 4,
            "machineName": "PAGE",
            "name": "Page",
            "dateArchived": null,
            "archivedBy": null
          },
          "format": null,
          "dateArchived": null,
          "archivedBy": null,
          "questions": [],
          "children": [
            {
              "@ref": "15"
            }
          ],
          "buttonLabelAdd": null,
          "rowLabelColumnHeader": null,
          "buttonLabelRemove": null,
          "rowLabels": [],
          "nonChildQuestions": [],
          "childCount": 1
        },
        "children": [
          {
            "@id": "17",
            "id": 2871,
            "position": 1,
            "narrative": null,
            "rule": null,
            "group": {
              "@id": "18",
              "id": 2599,
              "machineName": "BLUE_QUESTION1",
              "title": "Blue Question",
              "titleInternal": "Blue Question",
              "narrative": "Default (Shared) Narrative",
              "footer": null,
              "type": {
                "id": 2,
                "machineName": "GROUP",
                "name": "Group",
                "dateArchived": null,
                "archivedBy": null
              },
              "format": {
                "id": 1,
                "machineName": "STANDARD",
                "name": "Standard Questions",
                "allowMultipleRows": false,
                "dateArchived": null,
                "archivedBy": null
              },
              "dateArchived": null,
              "archivedBy": null,
              "questions": [
                {
                  "@id": "19",
                  "id": 2890,
                  "position": 1,
                  "rule": null,
                  "group": {
                    "@ref": "18"
                  },
                  "question": {
                    "id": 2561,
                    "type": {
                      "id": 5,
                      "machineName": "SINGLE_CHOICE_EXPANDED",
                      "name": "Single Choice - Expanded",
                      "allowAnswerChoices": true,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "validations": [
                      {
                        "id": 2785,
                        "type": {
                          "id": 7,
                          "machineName": "REQUIRED",
                          "name": "Required",
                          "description": null,
                          "dateArchived": null,
                          "archivedBy": null,
                          "allowGroupQuestions": true,
                          "allowQuestions": true
                        },
                        "format": null,
                        "errorMessage": "TELL US NOW!",
                        "rowLabel": null
                      }
                    ],
                    "questionAnswerChoices": [
                      {
                        "id": 2501,
                        "machineName": "WATCHMEN_NO_ONE",
                        "text": "No one",
                        "position": 1,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2502,
                        "machineName": "WATCHMEN_YOU",
                        "text": "You do!",
                        "position": 2,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2503,
                        "machineName": "WATCHMEN_THAT_GUY",
                        "text": "That guy over there.",
                        "position": 3,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2504,
                        "machineName": "WATCHMEN_WHO_CARES",
                        "text": "Who cares.",
                        "position": 4,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      }
                    ],
                    "ownerId": 2,
                    "machineName": "WATCHING_WATCHMEN",
                    "title": null,
                    "question": "Who watches the watchmen?",
                    "helpText": null,
                    "inputMask": null,
                    "labelClass": null,
                    "fieldClass": null,
                    "helpClass": null,
                    "answerChoicesRemoteUrl": null,
                    "dateArchived": null,
                    "archivedBy": null,
                    "answerChoicesFromRemoteUrl": null,
                    "groupQuestionCount": 1
                  },
                  "parent": null,
                  "children": [],
                  "validations": [],
                  "hasTotalRow": null,
                  "defaultValue": null,
                  "dateArchived": null,
                  "archivedBy": null
                },
                {
                  "@id": "20",
                  "id": 2891,
                  "position": 2,
                  "rule": {
                    "id": 2684,
                    "rule": null,
                    "value": null,
                    "comparator": null,
                    "ruleType": {
                      "id": 2,
                      "machineName": "RULE_GROUP_OR",
                      "name": "Group of Rules (OR)",
                      "description": null,
                      "allowGroupHierarchies": true,
                      "allowGroupQuestions": true,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "children": [
                      {
                        "id": 2685,
                        "rule": "2890",
                        "value": "2502",
                        "comparator": null,
                        "ruleType": {
                          "id": 3,
                          "machineName": "RULE_ANSWER_CHOICE",
                          "name": "Answer Choice",
                          "description": null,
                          "allowGroupHierarchies": true,
                          "allowGroupQuestions": true,
                          "dateArchived": null,
                          "archivedBy": null
                        },
                        "children": [],
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2686,
                        "rule": "2890",
                        "value": "2503",
                        "comparator": null,
                        "ruleType": {
                          "id": 3,
                          "machineName": "RULE_ANSWER_CHOICE",
                          "name": "Answer Choice",
                          "description": null,
                          "allowGroupHierarchies": true,
                          "allowGroupQuestions": true,
                          "dateArchived": null,
                          "archivedBy": null
                        },
                        "children": [],
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2687,
                        "rule": "2890",
                        "value": "2504",
                        "comparator": null,
                        "ruleType": {
                          "id": 3,
                          "machineName": "RULE_ANSWER_CHOICE",
                          "name": "Answer Choice",
                          "description": null,
                          "allowGroupHierarchies": true,
                          "allowGroupQuestions": true,
                          "dateArchived": null,
                          "archivedBy": null
                        },
                        "children": [],
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2688,
                        "rule": "2890",
                        "value": "2501",
                        "comparator": null,
                        "ruleType": {
                          "id": 3,
                          "machineName": "RULE_ANSWER_CHOICE",
                          "name": "Answer Choice",
                          "description": null,
                          "allowGroupHierarchies": true,
                          "allowGroupQuestions": true,
                          "dateArchived": null,
                          "archivedBy": null
                        },
                        "children": [],
                        "dateArchived": null,
                        "archivedBy": null
                      }
                    ],
                    "dateArchived": null,
                    "archivedBy": null
                  },
                  "group": {
                    "@ref": "18"
                  },
                  "question": {
                    "id": 2562,
                    "type": {
                      "id": 5,
                      "machineName": "SINGLE_CHOICE_EXPANDED",
                      "name": "Single Choice - Expanded",
                      "allowAnswerChoices": true,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "validations": [],
                    "questionAnswerChoices": [
                      {
                        "id": 2505,
                        "machineName": "ANSWERED_YES_EMPHATIC",
                        "text": "YES!",
                        "position": 1,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      },
                      {
                        "id": 2506,
                        "machineName": "ANSWERED_NO_EMPHATIC",
                        "text": "NO!",
                        "position": 2,
                        "userInput": null,
                        "userInputRequired": null,
                        "userInputLabel": null,
                        "dateArchived": null,
                        "archivedBy": null
                      }
                    ],
                    "ownerId": 3,
                    "machineName": "PREVIOUS_ANSWERED",
                    "title": null,
                    "question": "Was the previous question answered?",
                    "helpText": null,
                    "inputMask": null,
                    "labelClass": null,
                    "fieldClass": null,
                    "helpClass": null,
                    "answerChoicesRemoteUrl": null,
                    "dateArchived": null,
                    "archivedBy": null,
                    "answerChoicesFromRemoteUrl": null,
                    "groupQuestionCount": 1
                  },
                  "parent": null,
                  "children": [],
                  "validations": [],
                  "hasTotalRow": null,
                  "defaultValue": null,
                  "dateArchived": null,
                  "archivedBy": null
                }
              ],
              "children": [
                {
                  "@id": "21",
                  "id": 2869,
                  "position": 1,
                  "narrative": null,
                  "rule": null,
                  "group": {
                    "@ref": "18"
                  },
                  "children": [],
                  "dateArchived": null,
                  "archivedBy": null
                },
                {
                  "@id": "22",
                  "id": 2866,
                  "position": 1,
                  "narrative": null,
                  "rule": null,
                  "group": {
                    "@ref": "18"
                  },
                  "children": [],
                  "dateArchived": null,
                  "archivedBy": null
                },
                {
                  "@ref": "17"
                },
                {
                  "@id": "23",
                  "id": 2659,
                  "position": 2,
                  "narrative": null,
                  "rule": {
                    "id": 2621,
                    "rule": "2376",
                    "value": "2145",
                    "comparator": null,
                    "ruleType": {
                      "id": 3,
                      "machineName": "RULE_ANSWER_CHOICE",
                      "name": "Answer Choice",
                      "description": null,
                      "allowGroupHierarchies": true,
                      "allowGroupQuestions": true,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "children": [],
                    "dateArchived": null,
                    "archivedBy": null
                  },
                  "group": {
                    "@ref": "18"
                  },
                  "children": [],
                  "dateArchived": null,
                  "archivedBy": null
                },
                {
                  "@id": "24",
                  "id": 2928,
                  "position": 2,
                  "narrative": null,
                  "rule": null,
                  "group": {
                    "@ref": "18"
                  },
                  "children": [],
                  "dateArchived": null,
                  "archivedBy": null
                }
              ],
              "buttonLabelAdd": null,
              "rowLabelColumnHeader": null,
              "buttonLabelRemove": null,
              "rowLabels": [],
              "nonChildQuestions": [
                {
                  "@ref": "19"
                },
                {
                  "@ref": "20"
                }
              ],
              "childCount": 5
            },
            "children": [],
            "dateArchived": null,
            "archivedBy": null
          },
          {
            "@id": "25",
            "id": 2872,
            "position": 2,
            "narrative": null,
            "rule": null,
            "group": {
              "@id": "26",
              "id": 2769,
              "machineName": "GRP_OF_RNDM_THNGS",
              "title": "Group of random things",
              "titleInternal": "Group of random things",
              "narrative": "This is a group of random things.",
              "footer": null,
              "type": {
                "id": 2,
                "machineName": "GROUP",
                "name": "Group",
                "dateArchived": null,
                "archivedBy": null
              },
              "format": {
                "id": 1,
                "machineName": "STANDARD",
                "name": "Standard Questions",
                "allowMultipleRows": false,
                "dateArchived": null,
                "archivedBy": null
              },
              "dateArchived": null,
              "archivedBy": null,
              "questions": [
                {
                  "@id": "27",
                  "id": 2894,
                  "position": 1,
                  "rule": null,
                  "group": {
                    "@ref": "26"
                  },
                  "question": {
                    "id": 2563,
                    "type": {
                      "id": 4,
                      "machineName": "TEXT",
                      "name": "Text - Short",
                      "allowAnswerChoices": false,
                      "dateArchived": null,
                      "archivedBy": null
                    },
                    "validations": [],
                    "questionAnswerChoices": [],
                    "ownerId": 4,
                    "machineName": "EXPLAIN_YOURSELF",
                    "title": null,
                    "question": "Explain yourself",
                    "helpText": null,
                    "inputMask": null,
                    "labelClass": null,
                    "fieldClass": null,
                    "helpClass": null,
                    "answerChoicesRemoteUrl": null,
                    "dateArchived": null,
                    "archivedBy": null,
                    "answerChoicesFromRemoteUrl": null,
                    "groupQuestionCount": 1
                  },
                  "parent": null,
                  "children": [],
                  "validations": [],
                  "hasTotalRow": null,
                  "defaultValue": null,
                  "dateArchived": null,
                  "archivedBy": null
                }
              ],
              "children": [
                {
                  "@ref": "25"
                }
              ],
              "buttonLabelAdd": null,
              "rowLabelColumnHeader": null,
              "buttonLabelRemove": null,
              "rowLabels": [],
              "nonChildQuestions": [
                {
                  "@ref": "27"
                }
              ],
              "childCount": 1
            },
            "children": [],
            "dateArchived": null,
            "archivedBy": null
          }
        ],
        "dateArchived": null,
        "archivedBy": null
      }
    ],
    "dateArchived": null,
    "archivedBy": null
  }
}